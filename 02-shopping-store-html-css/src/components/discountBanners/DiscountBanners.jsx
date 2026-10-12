import './DiscountBanners.css';

export default function DiscountBanners() {
    return (
        <>
            {/* DISCOUNT BANNERS */}
            <section className="section" style={{paddingTop:"0"}}>
                <div className="container">
                    <div className="discount-row">
                        <article className="discount-card discount-card--watch">
                            <span className="meta">THIS WEEK ONLY</span>
                            <h3>Mega Discounts<br /><span className="pct">50% Off</span></h3>
                            <a href="shop.html" className="shop-now">Shop Now
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <img className="product" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80&auto=format&fit=crop" alt="Smart watch" />
                        </article>
                        <article className="discount-card discount-card--airpods">
                            <span className="meta">LIMITED EDITION</span>
                            <h3>Studio Buds Pro<br /><span className="pct">30% Off</span></h3>
                            <a href="shop.html" className="shop-now">Shop Now
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <img className="product" src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80&auto=format&fit=crop" alt="Earbuds" />
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}