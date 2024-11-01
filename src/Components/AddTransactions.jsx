import React, { useState } from 'react';

function AddTransactions(props) {
    const [tempParticular, setTempParticular] = useState('');
    const [tempAmount, setTempAmount] = useState('');

    function handleParticular(event) {
        setTempParticular(event.target.value);
    }

    function handleAmount(event) {
        setTempAmount(event.target.value);
    }

    function handleButton() {
        if (tempAmount !== '' && tempParticular !== '') {
            props.setAmount(prev => [...prev, Number(tempAmount)]);
            props.setParticular(prev => [...prev, tempParticular]);
            setTempAmount(''); // clears input after adding
            setTempParticular(''); // clears input after adding
          
        } else {
            alert("Please fill the inputs");
        }
    }

    

    return (
        <div>
            <div className='particularInput'>

                <input
                    value={tempParticular}
                    onChange={handleParticular}
                    placeholder='Enter the particular'
                    type="text"
                />
            </div>
            <div className="amountInput">

                <input
                    value={tempAmount}
                    onChange={handleAmount}
                    placeholder='Enter the amount here'
                    type="text"
                />
            </div>
            <h3>- for Expenses, + from earnings</h3>

            <button style={{backgroundColor:'4CAF50'}}  onClick={handleButton}>Add Transaction</button>
        </div>
    );
}

export default AddTransactions;
