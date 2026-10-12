import './JustForYou.css';

export default function JustForYou() {
    return (
        <>
            {/* COMPACT row (4 cards in 2x2 layout) */}
            <section className="section" style={{paddingTop:"0"}}>
                <div className="container">
                    <div className="section-head">
                        <h2>Just for you</h2>
                        <a href="shop.html" className="view-all">More picks
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                    </div>
                    <div className="compact-row">
                        <article className="compact-card">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div>
                                <div className="stock">IN STOCK · 12</div>
                                <div className="name">Apple Airpods V57</div>
                                <div className="price">$680</div>
                                <a href="cart.html" className="btn">Order Now</a>
                            </div>
                        </article>
                        <article className="compact-card">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div>
                                <div className="stock">IN STOCK · 8</div>
                                <div className="name">Apple MacBook Pro</div>
                                <div className="price">$2,780</div>
                                <a href="cart.html" className="btn">Order Now</a>
                            </div>
                        </article>
                        <article className="compact-card">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div>
                                <div className="stock">IN STOCK · 24</div>
                                <div className="name">Power Wired Controller</div>
                                <div className="price">$190</div>
                                <a href="cart.html" className="btn">Order Now</a>
                            </div>
                        </article>
                        <article className="compact-card">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div>
                                <div className="stock">IN STOCK · 36</div>
                                <div className="name">Gaming Mouse Pro</div>
                                <div className="price">$190</div>
                                <a href="cart.html" className="btn">Order Now</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}