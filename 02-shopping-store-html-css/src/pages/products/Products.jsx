import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Products.css';
import Footer from '../../components/footer/Footer';

export default function Products() {
    const images = [
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=900&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574920162043-b872873f19c8?w=900&q=80&auto=format&fit=crop'
    ];

    const [activeImage, setActiveImage] = useState(0);

    return (
        <>
            <Navbar />

            <main id="main">
                <div className="container">


                    <div className="container">
                        <div className="crumbs" style={{ paddingTop: "var(--s5)" }}>
                            <a href="index.html">Home</a>
                            <span className="sep">›</span>
                            <a href="shop.html">Shop</a>
                            <span className="sep">›</span>
                            <span>Speakers</span>
                        </div>

                        <section className="product-detail">
                            <div className="gallery">
                                <div className="gallery-thumbs">
                                    <button className="is-active">
                                        <img
                                            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&q=80&auto=format&fit=crop"
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <img
                                            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=200&q=80&auto=format&fit=crop"
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <img
                                            src="https://images.unsplash.com/photo-1589003077984-894e133dabab?w=200&q=80&auto=format&fit=crop"
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <img
                                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80&auto=format&fit=crop"
                                            alt=""
                                        />
                                    </button>

                                    <button>
                                        <img
                                            src="https://images.unsplash.com/photo-1574920162043-b872873f19c8?w=200&q=80&auto=format&fit=crop"
                                            alt=""
                                        />
                                    </button>
                                </div>

                                <figure className="gallery-main">
                                    <img
                                        src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80&auto=format&fit=crop"
                                        alt="HomePod 2nd Gen speaker"
                                    />
                                </figure>
                            </div>

                            <div className="pdp-info">
                                <span className="pdp-cat">⚡ Audio · Featured</span>

                                <h1>Apple HomePod 2nd Gen Speaker</h1>

                                <div className="rating-row">
                                    <span style={{ color: "var(--amber)", fontSize: 16 }}>
                                        ★★★★★
                                    </span>

                                    <span>4.9 / 5 · 312 reviews</span>

                                    <span style={{ color: "var(--rule-strong)" }}>|</span>

                                    <span
                                        style={{
                                            color: "var(--emerald)",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 6,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 6,
                                                height: 6,
                                                background: "var(--emerald)",
                                                borderRadius: 999,
                                                display: "inline-block",
                                            }}
                                        />
                                        In stock · 22 items
                                    </span>
                                </div>

                                <p className="desc">
                                    Spatial audio, room-sensing tech, and the centrepiece of your Apple
                                    ecosystem. Built-in S7 chip, dynamic computational audio, and seamless
                                    handoff from iPhone. The new HomePod is designed to disappear into your
                                    room and fill it with sound.
                                </p>

                                <div className="price-row">
                                    <span className="now">$280</span>
                                    <span className="was">$320</span>
                                    <span className="save">Save 12%</span>
                                </div>

                                <div className="option-block">
                                    <div className="label">Color</div>

                                    <div className="color-swatches">
                                        <button
                                            className="is-active"
                                            style={{
                                                background: "#FFFFFF",
                                                borderRadius: 999,
                                                outlineColor: "var(--rule-strong)",
                                            }}
                                            aria-label="White"
                                        />

                                        <button
                                            style={{ background: "#0F172A" }}
                                            aria-label="Midnight"
                                        />

                                        <button
                                            style={{ background: "#F97316" }}
                                            aria-label="Orange"
                                        />

                                        <button
                                            style={{ background: "#4F46E5" }}
                                            aria-label="Indigo"
                                        />
                                    </div>
                                </div>

                                <div className="option-block">
                                    <div className="label">Configuration</div>

                                    <div className="option-pills">
                                        <button>Single</button>
                                        <button className="is-active">Stereo pair · save $40</button>
                                        <button>3-pack · save $120</button>
                                    </div>
                                </div>

                                <div className="option-block">
                                    <div className="label">AppleCare+</div>

                                    <div className="option-pills">
                                        <button className="is-active">No coverage</button>
                                        <button>2 years · $39</button>
                                        <button>3 years · $59</button>
                                    </div>
                                </div>

                                <div className="pdp-cta">
                                    <div className="qty">
                                        <button type="button" data-act="-" aria-label="Decrease">
                                            −
                                        </button>

                                        <input
                                            type="text"
                                            defaultValue="1"
                                            inputMode="numeric"
                                            aria-label="Quantity"
                                        />

                                        <button type="button" data-act="+" aria-label="Increase">
                                            +
                                        </button>
                                    </div>

                                    <a
                                        href="cart.html"
                                        className="btn btn--indigo"
                                        style={{ flex: 1, minWidth: 160 }}
                                    >
                                        Add to cart →
                                    </a>

                                    <a href="cart.html" className="btn btn--ink">
                                        Buy now
                                    </a>

                                    <button
                                        className="icon-btn"
                                        aria-label="Add to wishlist"
                                        style={{ background: "var(--bg)" }}
                                    >
                                        ♡
                                    </button>
                                </div>

                                <div className="pdp-features">
                                    <div className="pf">
                                        <span className="ic">⚡</span>
                                        <span>Free shipping over $50</span>
                                    </div>

                                    <div className="pf">
                                        <span className="ic">↺</span>
                                        <span>30-day free returns</span>
                                    </div>

                                    <div className="pf">
                                        <span className="ic">★</span>
                                        <span>2-year limited warranty</span>
                                    </div>

                                    <div className="pf">
                                        <span className="ic">✓</span>
                                        <span>Authentic Apple product</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>



                    {/* Specifications and reviews */}

                    <section className="section" style={{ paddingTop: 0 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s8)", }}
                        >
                            <div>
                                <h2
                                    style={{
                                        fontSize: "var(--text-2xl)",
                                        marginBottom: "var(--s5)",
                                    }}
                                >
                                    Specifications
                                </h2>

                                <table
                                    style={{
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: "var(--text-sm)",
                                    }}
                                >
                                    <tbody>
                                        {[
                                            ["Chip", "Apple S7 SiP"],
                                            [
                                                "Drivers",
                                                "4-inch high-excursion woofer, 5 beam-forming tweeters",
                                            ],
                                            ["Connectivity", "Wi-Fi 4, Bluetooth 5.0, Thread, U1"],
                                            ["Spatial audio", "Yes, with dynamic head tracking"],
                                            ["Dimensions", "168 × 142 mm · 2.3 kg"],
                                            [
                                                "In the box",
                                                "HomePod, power cable (1.8 m), documentation",
                                            ],
                                            ["Warranty", "2-year limited"],
                                        ].map(([label, value], index, array) => (
                                            <tr
                                                key={label}
                                                style={{
                                                    borderBottom:
                                                        index !== array.length - 1
                                                            ? "1px solid var(--rule)"
                                                            : "none",
                                                }}
                                            >
                                                <td
                                                    style={{
                                                        padding: "var(--s4) 0",
                                                        color: "var(--fg-mute)",
                                                        fontFamily: "var(--ff-mono)",
                                                        fontSize: "var(--text-xs)",
                                                        letterSpacing: "0.06em",
                                                        textTransform: "uppercase",
                                                        width: "40%",
                                                    }}
                                                >
                                                    {label}
                                                </td>

                                                <td
                                                    style={{
                                                        padding: "var(--s4) 0",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h2
                                    style={{
                                        fontSize: "var(--text-2xl)",
                                        marginBottom: "var(--s5)",
                                    }}
                                >
                                    Reviews
                                </h2>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "auto 1fr",
                                        gap: "var(--s5)",
                                        alignItems: "center",
                                        padding: "var(--s5)",
                                        background: "var(--bg)",
                                        borderRadius: "var(--r)",
                                        marginBottom: "var(--s5)",
                                    }}
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <div
                                            style={{
                                                fontFamily: "var(--ff-display)",
                                                fontSize: 48,
                                                fontWeight: 800,
                                                color: "var(--ink)",
                                                lineHeight: 1,
                                            }}
                                        >
                                            4.9
                                        </div>

                                        <div style={{ color: "var(--amber)", fontSize: 18 }}>
                                            ★★★★★
                                        </div>

                                        <div
                                            style={{
                                                fontFamily: "var(--ff-mono)",
                                                fontSize: 11,
                                                color: "var(--fg-mute)",
                                                marginTop: 4,
                                            }}
                                        >
                                            312 reviews
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: "grid",
                                            gap: 6,
                                            fontFamily: "var(--ff-mono)",
                                            fontSize: "var(--text-xs)",
                                            color: "var(--fg-soft)",
                                        }}
                                    >
                                        {[
                                            [5, 82],
                                            [4, 14],
                                            [3, 3],
                                            [2, 1],
                                            [1, 0],
                                        ].map(([stars, percentage]) => (
                                            <div
                                                key={stars}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8,
                                                }}
                                            >
                                                <span style={{ width: 16 }}>{stars}</span>

                                                <span
                                                    style={{
                                                        flex: 1,
                                                        height: 6,
                                                        background: "var(--rule)",
                                                        borderRadius: 999,
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            display: "block",
                                                            width: `${percentage}%`,
                                                            height: "100%",
                                                            background: "var(--amber)",
                                                        }}
                                                    />
                                                </span>

                                                <span
                                                    style={{
                                                        width: 28,
                                                        textAlign: "right",
                                                    }}
                                                >
                                                    {percentage}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {[
                                    {
                                        name: "Mira K.",
                                        date: "2 days ago",
                                        review:
                                            "Bought a stereo pair for the living room. The room-sensing makes a real difference — they adapt to where you put them. Setup was 90 seconds with the iPhone handoff.",
                                    },
                                    {
                                        name: "Devan R.",
                                        date: "1 week ago",
                                        review:
                                            "Replaced my old Sonos with this. Spatial audio is genuinely impressive on Atmos tracks. Build quality is excellent. Only wish it had a 3.5 mm jack for guests.",
                                    },
                                ].map((review) => (
                                    <article
                                        key={review.name}
                                        style={{
                                            borderBottom: "1px solid var(--rule)",
                                            paddingBottom: "var(--s5)",
                                            marginBottom: "var(--s5)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: 8,
                                            }}
                                        >
                                            <strong
                                                style={{
                                                    fontFamily: "var(--ff-display)",
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {review.name}
                                            </strong>

                                            <span
                                                style={{
                                                    fontFamily: "var(--ff-mono)",
                                                    fontSize: 11,
                                                    color: "var(--fg-mute)",
                                                }}
                                            >
                                                {review.date}
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                color: "var(--amber)",
                                                fontSize: 14,
                                                marginBottom: 6,
                                            }}
                                        >
                                            ★★★★★
                                        </div>

                                        <p
                                            style={{
                                                fontSize: "var(--text-sm)",
                                                color: "var(--fg-soft)",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {review.review}
                                        </p>
                                    </article>
                                ))}

                                <a href="#" className="btn btn--ghost btn--block">
                                    Read all 312 reviews →
                                </a>
                            </div>
                        </div>
                    </section>


                    {/* Related products */}
                    <section className="section">
                        <div className="section-head">
                            <h2>You may also like</h2>
                            <a href="shop.html" className="view-all">All products →</a>
                        </div>
                        <div className="products">
                            <article className="product-card">
                                <div className="img-wrap"><button className="wishlist">♡</button><img
                                    src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop"
                                    alt="" /></div>
                                <div className="stock"><span className="dot"></span>In stock · 67 items</div>
                                <a href="product.html" className="name">Beats Studio Buds Pro</a>
                                <div className="price"><span className="now">$280</span></div>
                                <div className="stars">★★★★☆ <span className="count">(312)</span></div>
                                <a href="cart.html" className="btn">Order now →</a>
                            </article>
                            <article className="product-card">
                                <div className="img-wrap"><span className="badge">New</span><button className="wishlist">♡</button><img
                                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop"
                                    alt="" /></div>
                                <div className="stock"><span className="dot"></span>In stock · 41 items</div>
                                <a href="product.html" className="name">Apple Watch Series 9</a>
                                <div className="price"><span className="now">$680</span></div>
                                <div className="stars">★★★★★ <span className="count">(245)</span></div>
                                <a href="cart.html" className="btn">Order now →</a>
                            </article>
                            <article className="product-card">
                                <div className="img-wrap"><button className="wishlist">♡</button><img
                                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80&auto=format&fit=crop"
                                    alt="" /></div>
                                <div className="stock"><span className="dot"></span>In stock · 12 items</div>
                                <a href="product.html" className="name">Apple AirPods V57</a>
                                <div className="price"><span className="now">$680</span></div>
                                <div className="stars">★★★★★ <span className="count">(124)</span></div>
                                <a href="cart.html" className="btn">Order now →</a>
                            </article>
                            <article className="product-card">
                                <div className="img-wrap"><span className="badge badge--sale">Sale</span><button className="wishlist">♡</button><img
                                    src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80&auto=format&fit=crop"
                                    alt="" /></div>
                                <div className="stock"><span className="dot"></span>In stock · 24 items</div>
                                <a href="product.html" className="name">Samsung S21 Ultra</a>
                                <div className="price"><span className="now">$2,580</span><span className="was">$2,780</span></div>
                                <div className="stars">★★★★★ <span className="count">(212)</span></div>
                                <a href="cart.html" className="btn">Order now →</a>
                            </article>
                            <article className="product-card">
                                <div className="img-wrap"><button className="wishlist">♡</button><img
                                    src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format&fit=crop"
                                    alt="" /></div>
                                <div className="stock"><span className="dot"></span>In stock · 24 items</div>
                                <a href="product.html" className="name">Canon EOS R7 DSLR</a>
                                <div className="price"><span className="now">$1,920</span></div>
                                <div className="stars">★★★★☆ <span className="count">(67)</span></div>
                                <a href="cart.html" className="btn">Order now →</a>
                            </article>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}