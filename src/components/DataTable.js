import React from 'react'

export default function DataTable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    return (
        <table cellPadding={0} cellSpacing={0} className="table table-bordered">
            <thead>
                <tr><th colspan="8" className="text-center bg-pink">
                    <h1>Dynamic DataTable By API calling</h1></th></tr>
                <tr>
                    {data[0] && columns.map((heading) => <th>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(row => <tr>
                    {
                        columns.map(column => <td>{row[column]}</td>)
                    }
                </tr>)}

            </tbody>
        </table>
    )
}
