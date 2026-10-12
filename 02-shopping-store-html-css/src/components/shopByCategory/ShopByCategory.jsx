import './ShopByCategory.css';

export default function ShopByCategory() {
    return (
        <>
            {/* CATEGORIES grid */}
            <section className="section" style={{paddingTop: "var(--s5)"}}>
                <div className="container">
                    <div className="section-head">
                        <h2>Shop by category</h2>
                        <a href="shop.html" className="view-all">View all products
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                    </div>
                    <div className="cats-grid">
                        <a href="shop.html" className="cat-tile">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div className="name">Watch</div>
                            <div className="count">28 Products</div>
                        </a>
                        <a href="shop.html" className="cat-tile">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div className="name">Camera</div>
                            <div className="count">42 Products</div>
                        </a>
                        <a href="shop.html" className="cat-tile">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div className="name">Smart Phone</div>
                            <div className="count">76 Products</div>
                        </a>
                        <a href="shop.html" className="cat-tile">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div className="name">Accessories</div>
                            <div className="count">112 Products</div>
                        </a>
                        <a href="shop.html" className="cat-tile">
                            <div className="pic"><img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&q=80&auto=format&fit=crop" alt="" /></div>
                            <div className="name">Smart Buds</div>
                            <div className="count">35 Products</div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}