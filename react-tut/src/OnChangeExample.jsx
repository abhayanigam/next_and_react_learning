import React, { useState } from 'react'

export default function OnChangeExample() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [comments, setComments] = useState('');
    const [payment, setPayment] = useState('cash');
    const [shipping, setShipping] = useState('standard');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity}</p>

            <textarea value={comments} onChange={handleCommentsChange} placeholder='Enter some value' />
            <p>Comments: {comments}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=''>Select Payment Method</option>
                <option value='cash'>Cash</option>
                <option value='card'>Card</option>
                <option value='upi'>UPI</option>
            </select>
            <p>Payment Method: {payment.toUpperCase()}</p>

            <label>
                <input type='radio' value='standard' checked={shipping === 'standard'} onChange={handleShippingChange} />
                Standard Shipping
            </label>
            <label>
                <input type='radio' value='express' checked={shipping === 'express'} onChange={handleShippingChange} />
                Express Shipping
            </label>
            <p>Shipping Method: {shipping.toUpperCase()}</p>
        </div>
    );
}
