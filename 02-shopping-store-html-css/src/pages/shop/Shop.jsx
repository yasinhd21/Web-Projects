import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Shop.css';

export default function Shop() {
    return (
        <>
            <Navbar />
            <main id="main">
                {/* Page Header */}
                <section className="page-head">
                    <div className="container">
                        <div className="crumbs">
                            <a href="index.html">Home</a>
                            <span className="sep">›</span>
                            <span>Shop · All products</span>
                        </div>

                        <h1>All Products</h1>
                        <p>
                            314 products across smartphones, laptops, audio, cameras,
                            wearables, and gaming. Use the filters on the left to narrow
                            down by brand, price, rating, or availability.
                        </p>
                    </div>
                </section>

                {/* Shop */}
                <section className="section">
                    <div className="container">
                        <div className="shop-layout">
                            {/* Filters */}
                            <aside className="filters" aria-label="Filters">
                                <div className="filter-block">
                                    <h3>Category</h3>

                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        Smartphones <span className="ct">76</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Laptops &amp; Desktops <span className="ct">42</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Smart Watches <span className="ct">28</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Cameras <span className="ct">42</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Headphones &amp; Buds <span className="ct">35</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Gaming <span className="ct">31</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Accessories <span className="ct">112</span>
                                    </label>
                                </div>

                                {/* Price Range */}
                                <div className="filter-block">
                                    <h3>Price range</h3>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontFamily: "var(--ff-mono)",
                                            fontSize: "11px",
                                            color: "var(--fg-mute)",
                                        }}
                                    >
                                        <span>$120</span>
                                        <span>$3,400</span>
                                    </div>

                                    <div className="range-bar" aria-hidden="true"></div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontFamily: "var(--ff-mono)",
                                            fontSize: "var(--text-xs)",
                                            fontWeight: 600,
                                            color: "var(--ink)",
                                            marginTop: "var(--s2)",
                                        }}
                                    >
                                        <span>$420</span>
                                        <span>$2,380</span>
                                    </div>
                                </div>

                                {/* Brand */}
                                <div className="filter-block">
                                    <h3>Brand</h3>

                                    <label>
                                        <input type="checkbox" />
                                        Apple <span className="ct">84</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        Samsung <span className="ct">72</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Sony <span className="ct">36</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Canon <span className="ct">22</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        HP <span className="ct">28</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Huawei <span className="ct">19</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Logitech <span className="ct">31</span>
                                    </label>
                                </div>

                                {/* Rating */}
                                <div className="filter-block">
                                    <h3>Rating</h3>

                                    <label>
                                        <input type="checkbox" />
                                        ★★★★★ &amp; up <span className="ct">186</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        ★★★★☆ &amp; up <span className="ct">242</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        ★★★☆☆ &amp; up <span className="ct">296</span>
                                    </label>
                                </div>

                                {/* Availability */}
                                <div className="filter-block">
                                    <h3>Availability</h3>

                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        In stock <span className="ct">298</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        On sale <span className="ct">64</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        New arrivals <span className="ct">28</span>
                                    </label>
                                </div>

                                <a href="#" className="btn btn--indigo btn--block">
                                    Apply filters
                                </a>
                            </aside>

                            {/* Products Area */}
                            <div>
                                {/* Toolbar */}
                                <div className="shop-toolbar">
                                    <span className="count">
                                        Showing 1 – 12 of 314 products
                                    </span>

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "var(--s3)",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "var(--text-xs)",
                                                color: "var(--fg-mute)",
                                                fontFamily: "var(--ff-mono)",
                                            }}
                                        >
                                            SORT
                                        </span>

                                        <select defaultValue="Most popular">
                                            <option>Most popular</option>
                                            <option>Price: low to high</option>
                                            <option>Price: high to low</option>
                                            <option>Newest first</option>
                                            <option>Highest rated</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Product Grid */}
                                <div className="shop-grid">
                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <span className="badge">New</span>
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80&auto=format&fit=crop"
                                                alt="Galaxy Note 20 Ultra 5G"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 52 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Galaxy Note 20 Ultra 5G
                                        </a>
                                        <div className="price">
                                            <span className="now">$2,780</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★★ <span className="count">(56)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <span className="badge badge--sale">Sale</span>
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80&auto=format&fit=crop"
                                                alt="iPad 10th Generation"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 32 items
                                        </div>
                                        <a href="product.html" className="name">
                                            iPad 10th Generation
                                        </a>
                                        <div className="price">
                                            <span className="now">$1,780</span>
                                            <span className="was">$1,980</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★★ <span className="count">(124)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80&auto=format&fit=crop"
                                                alt="Apple MacBook Pro M3"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 18 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Apple MacBook Pro M3
                                        </a>
                                        <div className="price">
                                            <span className="now">$2,480</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★★ <span className="count">(89)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format&fit=crop"
                                                alt="Canon EOS R7 DSLR"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 24 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Canon EOS R7 DSLR
                                        </a>
                                        <div className="price">
                                            <span className="now">$1,920</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★☆ <span className="count">(67)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <span className="badge">New</span>
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop"
                                                alt="Apple Watch Series 9"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 41 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Apple Watch Series 9
                                        </a>
                                        <div className="price">
                                            <span className="now">$680</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★★ <span className="count">(245)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop"
                                                alt="Beats Studio Buds Pro"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 67 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Beats Studio Buds Pro
                                        </a>
                                        <div className="price">
                                            <span className="now">$280</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★☆ <span className="count">(312)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <span className="badge badge--sale">Sale</span>
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80&auto=format&fit=crop"
                                                alt="Apple HomePod 2nd Gen"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 22 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Apple HomePod 2nd Gen
                                        </a>
                                        <div className="price">
                                            <span className="now">$280</span>
                                            <span className="was">$320</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★★ <span className="count">(98)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&q=80&auto=format&fit=crop"
                                                alt="Power Wired Controller"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 34 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Power Wired Controller
                                        </a>
                                        <div className="price">
                                            <span className="now">$190</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★★ <span className="count">(78)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>

                                    <article className="product-card">
                                        <div className="img-wrap">
                                            <button className="wishlist">♡</button>
                                            <img
                                                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80&auto=format&fit=crop"
                                                alt="Galaxy S24 Ultra Mint"
                                            />
                                        </div>
                                        <div className="stock">
                                            <span className="dot"></span>
                                            In stock · 19 items
                                        </div>
                                        <a href="product.html" className="name">
                                            Galaxy S24 Ultra Mint
                                        </a>
                                        <div className="price">
                                            <span className="now">$1,420</span>
                                        </div>
                                        <div className="stars">
                                            ★★★★☆ <span className="count">(56)</span>
                                        </div>
                                        <a href="cart.html" className="btn">Order now →</a>
                                    </article>
                                </div>

                                {/* Pagination */}
                                <div className="pagination">
                                    <a href="#" className="pg">‹</a>
                                    <a href="#" className="pg is-active">1</a>
                                    <a href="#" className="pg">2</a>
                                    <a href="#" className="pg">3</a>
                                    <a href="#" className="pg">…</a>
                                    <a href="#" className="pg">26</a>
                                    <a href="#" className="pg">›</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brands */}
                <section className="brands">
                    <div className="container">
                        <div className="brand-row">
                            <a href="#" className="brand-logo">HP</a>
                            <a href="#" className="brand-logo">Huawei</a>
                            <a href="#" className="brand-logo">Nokia</a>
                            <a href="#" className="brand-logo">Samsung</a>
                            <a href="#" className="brand-logo">Canon</a>
                            <a href="#" className="brand-logo">Sony</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}