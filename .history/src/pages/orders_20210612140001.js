import { getSession, useSession } from 'next-auth/client'
import React from 'react'
import Header from '../components/Header'

function Orders({ orders }) {
    const [session] = useSession();
    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Your Orders</h1>
                {session ? (
                    <h2>x Orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )

                }
            </main>
        </div>
    )
}

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // Get the users loggedd in credentials... 
    const session = getSession(context);
    if (!session) {
        return {
            props: {},
        };
    }
    // firebase db
    const stripeOrders = await db
        .collection('users')
        .doc((await session).user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    // stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),

            items: (
                await stripe.checkout.session.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    )
}