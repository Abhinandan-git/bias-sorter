import React, { useState } from 'react';
import Results from './Results';

// Initial list of items to sort (can be images or names)
const initialItems = [
  { imageURL: 'https://i.imgur.com/qn2vMlD.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/9L5eHit.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/TkiTU7C.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/JWChmYq.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/9TmajRr.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/bGfBU6C.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/BTMcUoP.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/sZZVOUx.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/w24ZZDy.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/BVrmm70.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/tFGuG9z.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/NcD0LY7.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/emXLHCH.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/j7Y0lVw.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/9vj9HyH.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/KYzuagl.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/f1lRyN6.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/hV4q2QH.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/MRy4nF7.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/1V39juH.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/9P2WOQf.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/NlPtSNJ.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/lwJDgvk.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/mqiqk8S.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/4HKkMyk.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/oHm31cn.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/SWLv7Dq.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/jlSUrjj.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/gvm3duD.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/I4P0A6E.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/2UE4ffD.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/SZvEhG0.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/OTOL7eT.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/QXaF0ew.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/uIVausG.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/9BBfdzE.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/Sj7mIeq.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/AS0XEJT.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/r4ZIdFm.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/BdxpNsF.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/Ejj20Il.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/F7YZhsO.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/vOWreLu.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/xk1Ajtj.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/BHVKYiS.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/pz4gCj7.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/KoMbLBi.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/dA5zyF9.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/tsm0Pwn.webp', bias: 0 },
  { imageURL: 'https://i.imgur.com/iYjv5Ko.webp', bias: 0 },
];

const Sorter = () => {
  const [items, setItems] = useState(initialItems);
  const [results, setResults] = useState(false);
  const [currentPair, setCurrentPair] = useState([0, 1]); // Two indices representing a pair
  const [comparedPairs, setComparedPairs] = useState(new Set()); // Set to track compared pairs

  const getResult = () => {
    setResults(true);
  };

  // Helper function to convert pair to a sorted string (to store undirected pairs)
  const pairKey = (first, second) => {
    return [Math.min(first, second), Math.max(first, second)].toString();
  };

  // Function to generate the next unique pair that hasn't been compared yet
  const getNextPair = () => {
    if (comparedPairs.size === (items.length * (items.length - 1)) / 2) {
      console.log("All pairs have been compared.");
      getResult();
      return;
    }

    let first, second, pair;
    do {
      first = Math.floor(Math.random() * items.length);
      second = Math.floor(Math.random() * items.length);
      pair = pairKey(first, second);
    } while (first === second || comparedPairs.has(pair)); // Ensure distinct and unvisited pair

    setComparedPairs(new Set([...comparedPairs, pair])); // Add the new pair to the set
    setCurrentPair([first, second]);
  };

  // Function to handle user selection and update the bias
  const handleSelect = (chosenIndex) => {
    const notChosenIndex = currentPair.find((index) => index !== chosenIndex);

    const updatedItems = items.map((item, index) => {
      if (index === chosenIndex) {
        return { ...item, bias: item.bias + 1 };
      } else if (index === notChosenIndex) {
        return { ...item, bias: item.bias - 1 };
      }
      return item;
    });

    setItems(updatedItems);
    getNextPair(); // Get the next comparison pair
  };

  // Sort items based on bias
  // eslint-disable-next-line
  const sortedItems = [...items].sort((a, b) => b.bias - a.bias);

	return (
		results ? <>
      <Results sorted={sortedItems}></Results>
    </> : (<>
			<div className="flexContainer">
				<div className="mainBodyContainer">
					<div className="leftImage imageHolder" onClick={() => handleSelect(currentPair[0])}>
						<img src={items[currentPair[0]].imageURL} alt={`${currentPair[0]}`} id='rightImage' />
          </div>
					<div className="buttonHolder">
						<div className="buttonDivision">Smash or Pass</div>
						<div className="buttons" onClick={() => getNextPair()}>Tie!</div>
					</div>
					<div className="rightImage imageHolder" onClick={() => handleSelect(currentPair[1])}>
						<img src={items[currentPair[1]].imageURL} alt={`${currentPair[1]}`} id='rightImage' />
					</div>
				</div>
			</div>
		</>)
	)
};

export default Sorter;