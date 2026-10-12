import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Cart.css'

export default function Cart() {
    const [items, setItems] = useState([
        {
            id: 'homepod',
            name: 'Apple HomePod 2nd Gen Speaker',
            price: 280,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&q=80&auto=format&fit=crop',
        },
        {
            id: 'watch',
            name: 'Apple Watch Series 9',
            price: 680,
            qty: 1,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80&auto=format&fit=crop',
        },
        {
            id: 'beats',
            name: 'Beats Studio Buds Pro',
            price: 280,
            qty: 2,
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&q=80&auto=format&fit=crop',
        },
    ])

    return (
        <>
            <Navbar />

            <main id="main">
                <section className="section">
                    <div className="container">
                        <div className="cart-list">
                            {items.map((item) => (
                                <article className="cart-row" key={item.id}>
                                    <div className="pic">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="info">
                                        <div className="name">{item.name}</div>
                                    </div>

                                    <span className="subtotal">
                                        ${item.price * item.qty}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}