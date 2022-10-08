import React from 'react'

const Table = ({ customer }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Customer Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Orders Datails</th>
                </tr>
                {customer?.map((item) => (
                <tr key={item._id}>
                    <td>{item.customerId}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <tr>
                        <th>OrderId</th>
                        <th>amount</th>
                        <th>date</th>
                    </tr>
                    {item?.orders?.map((data) => (
                        <tr key={data._id}>
                            <td>{data.orderID}</td>
                            <td>{data.amount}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
