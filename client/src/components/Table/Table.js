import React from 'react'

const Table = ({ customer }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Customer Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Order Id</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                {customer?.map((item) => (
                <tr key={item._id}>
                    <td>{item.customerId}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                        <table>
                            <tbody>
                            {customer?.orders?.map((data) => (
                                <tr key={data._id}>
                                    <td>{data.orderID}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </td>
                    {/* <td>{item.orders.orderID}</td>
                    <td>{item.orders.amount}</td>
                    <td>{item.orders.date}</td> */}
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table