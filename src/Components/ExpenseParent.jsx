import React, { useState, useEffect } from 'react';
import AddTransactions from './AddTransactions';
import Balance from './Balance';
import Card from './Card';
import ParticularCard from './ParticularCard';

function ExpenseParent() {
    const [amount, setAmount] = useState([]);
    const [Particular, setParticular] = useState([]);

    

    useEffect(() => {
        const savedParticular = localStorage.getItem('my transactions app');
        const savedAmount = localStorage.getItem('my amount tab');
    
        if (savedParticular) {
            try {
                setParticular(JSON.parse(savedParticular));
            } catch (error) {
                console.error('Error parsing saved transactions:', error);
            }
        }
    
        if (savedAmount) {
            try {
                setAmount(JSON.parse(savedAmount));
            } catch (error) {
                console.error('Error parsing saved amounts:', error);
            }
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('my transactions app', JSON.stringify(Particular));
        console.log("check check");
    }, [Particular]);

    useEffect(() => {
        window.localStorage.setItem('my amount tab', JSON.stringify(amount));
    }, [amount]);

    return (
        <div>
            <Balance Amount={amount} />
            <ParticularCard  setAmount={setAmount} setParticular={setParticular} defaultmessage="No Transactions Yet" Particular={Particular} Amount={amount} />
            <AddTransactions  setParticular={setParticular} setAmount={setAmount} Amount={amount} />
            <Card />
        </div>
    );
}

export default ExpenseParent;
