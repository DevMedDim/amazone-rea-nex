import React from 'react';
import moment from 'moment';
import Currency from 'react-currency-formatter';



export default function OrderComp({ id, amount, amountShipping, items, timestamp, images }) {
    return (
        <div className=" border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>
                        <Currency quantity ={amount} currency="MAD" /> - Next Day Delivery {""}
                        <Currency quantity  = {amountShipping} currency="MAD" />
                    </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end">
                    {items.length} item(s)
                </p>
            </div>
        </div>
    )
}
