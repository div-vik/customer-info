import React from 'react'
import "./Customers.css"

const Customers = ({
    customerId,
    firstName,
    lastName,
    orderID,
    amount,
    date
}) => {
    return (
        <div className='table-content'>
            <h5>{customerId}</h5>
            <h5>{firstName}</h5>
            <h5>{lastName}</h5>
            <h5>{orderID}</h5>
            <h5>{amount}</h5>
            <h5>{date}</h5>
        </div>
    )
}

export default Customers