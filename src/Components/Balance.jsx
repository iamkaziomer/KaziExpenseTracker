import React from 'react';

function Balance({ Amount }) { // Destructure Amount from props

  // Calculate the sum of the Amount array
  const sum = Amount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return (
    <div className='balanceComponent'>
        <h1>Available Balance {sum}</h1>
        
    </div>
  );
}

export default Balance;
