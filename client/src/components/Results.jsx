import React from 'react';

const Result = ({ sorted }) => {
  return (
    <div className='resultContainer' style={{ marginTop: '30px' }}>
      <h2>The Ranks:</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Display rank (1-based index) */}
              <td>
                <img src={item.imageURL} alt={`Item ${index}`}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;