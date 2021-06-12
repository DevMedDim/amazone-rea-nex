import moment from 'moment'
import React from 'react'


export default function Order( {id, amount, amountShipping, timestamp, images}) {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <P> {moment.unix(timestamp).format('DD MM YYYY')} </P>
                </div>
            </div>
        </div>
    )
}
