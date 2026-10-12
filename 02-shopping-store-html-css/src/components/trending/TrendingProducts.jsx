import './TrendingProducts.css';


export default function TrendingProducts() {
    return (
        <>
            {/* TRENDING PRODUCTS */}
            <section className="section" style={{paddingTop: "var(--s5)"}}>
                <div className="container">
                    <div className="section-head">
                        <h2>Trending Products</h2>
                        <a href="shop.html" className="view-all">View all
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                    </div>

                    <div className="tabs" role="tablist">
                        <button className="tab is-active" role="tab" aria-selected="true">Mobile</button>
                        <button className="tab" role="tab">Watch</button>
                        <button className="tab" role="tab">Camera</button>
                        <button className="tab" role="tab">Accessories</button>
                        <button className="tab" role="tab">Speaker</button>
                    </div>

                    <div className="products">
                        <article className="product-card">
                            <div className="img-wrap">
                                <span className="badge">New</span>
                                <button className="wishlist" aria-label="Wishlist">♡</button>
                                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80&auto=format&fit=crop" alt="Galaxy Note 20 Ultra 5G" />
                            </div>
                            <div className="stock"><span className="dot"></span>In stock · 52 items</div>
                            <a href="product.html" className="name">Galaxy Note 20 Ultra 5G</a>
                            <div className="price"><span className="now">$2,780</span></div>
                            <div className="stars">★★★★★ <span className="count">(56)</span></div>
                            <a href="cart.html" className="btn">Order now →</a>
                        </article>

                        <article className="product-card">
                            <div className="img-wrap">
                                <span className="badge badge--sale">Sale</span>
                                <button className="wishlist" aria-label="Wishlist">♡</button>
                                <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80&auto=format&fit=crop" alt="iPad 10th Generation" />
                            </div>
                            <div className="stock"><span className="dot"></span>In stock · 32 items</div>
                            <a href="product.html" className="name">iPad 10th Generation</a>
                            <div className="price"><span className="now">$1,780</span><span className="was">$1,980</span></div>
                            <div className="stars">★★★★★ <span className="count">(124)</span></div>
                            <a href="cart.html" className="btn">Order now →</a>
                        </article>

                        <article className="product-card">
                            <div className="img-wrap">
                                <button className="wishlist" aria-label="Wishlist">♡</button>
                                <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80&auto=format&fit=crop" alt="Galaxy Note 20 Ultra 5G mint" />
                            </div>
                            <div className="stock"><span className="dot"></span>In stock · 41 items</div>
                            <a href="product.html" className="name">Galaxy Note 20 Ultra 5G</a>
                            <div className="price"><span className="now">$2,780</span></div>
                            <div className="stars">★★★★☆ <span className="count">(89)</span></div>
                            <a href="cart.html" className="btn">Order now →</a>
                        </article>

                        <article className="product-card">
                            <div className="img-wrap">
                                <span className="badge">New</span>
                                <button className="wishlist" aria-label="Wishlist">♡</button>
                                <img src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80&auto=format&fit=crop" alt="Samsung S21 Ultra" />
                            </div>
                            <div className="stock"><span className="dot"></span>In stock · 24 items</div>
                            <a href="product.html" className="name">Samsung S21 Ultra</a>
                            <div className="price"><span className="now">$2,780</span></div>
                            <div className="stars">★★★★★ <span className="count">(212)</span></div>
                            <a href="cart.html" className="btn">Order now →</a>
                        </article>

                        <article className="product-card">
                            <div className="img-wrap">
                                <button className="wishlist" aria-label="Wishlist">♡</button>
                                <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80&auto=format&fit=crop" alt="Samsung Galaxy Note 20" />
                            </div>
                            <div className="stock"><span className="dot"></span>In stock · 67 items</div>
                            <a href="product.html" className="name">Samsung Galaxy Note 20</a>
                            <div className="price"><span className="now">$2,780</span></div>
                            <div className="stars">★★★★★ <span className="count">(98)</span></div>
                            <a href="cart.html" className="btn">Order now →</a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}