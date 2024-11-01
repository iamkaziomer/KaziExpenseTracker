import React from 'react';

function ParticularCard({ Particular = ["No Transactions Yet"], Amount = [], defaultmessage, setParticular, setAmount,buttonColor }) {

  const handleRemoveTransaction = (index) => {
    setParticular((prev) => prev.filter((_, i) => i !== index));
    setAmount((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='List'>
      <div className="particularText">
        {Particular.length === 0 ? (
          <div>{defaultmessage}</div>
        ) : (
          Particular.map((item1, index1) => (
            <div className='newdiv' key={index1}>
              <button style={{backgroundColor:buttonColor}}  onClick={() => handleRemoveTransaction(index1)}>x</button>
              {item1} - <span>{Amount[index1] !== undefined ? Amount[index1] : 0}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default ParticularCard;
