import React from 'react';
import moment from 'moment';
import Currency from 'react-currency-formatter';



export default function Orderr({ id, amount, amountShipping, items, timestamp, images }) {
    return (
        <div className=" border rounded-md">
            <h1>Hello</h1>
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
                </div>
            </div>
        </div>
    )
}
