import './HeroSection.css';

export default function HeroSection() {
    return (
        <>
            {/* HERO: bento grid */}
            <section className="hero">
                <div className="container">
                    <div className="bento">

                        <article className="bento-card bento-card--lg">
                            <div className="sparkle"></div>
                            <div>
                                <span className="eyebrow">⚡ Audio &middot; Featured</span>
                                <h2>Apple HomePod<br />2nd Gen Speaker</h2>
                                <p>Apple ecosystem with high-quality audio playback while serving as a hub for controlling smart home devices. Spatial audio, room-sensing tech.</p>
                                <a href="product.html" className="btn btn--paper">Shop Now
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                                <div className="dots"><span className="active"></span><span></span><span></span></div>
                            </div>
                            <img className="product" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80&auto=format&fit=crop" alt="HomePod speaker" />
                        </article>

                        <article className="bento-card bento-card--purple">
                            <div className="sparkle"></div>
                            <span className="eyebrow">Wearables</span>
                            <h3 style={{fontSize:"var(--text-xl)", lineHeight:"1.15"}}>Explore<br />Apple Watch</h3>
                            <a href="product.html" className="shop-now">Shop Now
                                <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <img className="product" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop" alt="Apple Watch" />
                        </article>

                        <article className="bento-card bento-card--teal">
                            <div className="sparkle"></div>
                            <span className="eyebrow">Latest Phones</span>
                            <h3 style={{fontSize:"var(--text-xl)", lineHeight:"1.15"}}>Galaxy S24<br />Ultra · 5G</h3>
                            <a href="product.html" className="shop-now">Shop Now
                                <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <img className="product" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&auto=format&fit=crop" alt="Samsung Galaxy phone" />
                        </article>

                        <div className="bento-row">
                            <article className="bento-card bento-card--orange">
                                <div className="sparkle"></div>
                                <span className="eyebrow">Cameras</span>
                                <h3 style={{fontSize:"var(--text-lg)", lineHeight:"1.2"}}>Samsung<br />Gear Camera</h3>
                                <a href="product.html" className="shop-now">Shop Now
                                    <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                                <img className="product" src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&q=80&auto=format&fit=crop" alt="Camera" />
                            </article>

                            <article className="bento-card bento-card--green">
                                <div className="sparkle"></div>
                                <span className="eyebrow">Audio</span>
                                <h3 style={{fontSize:"var(--text-lg)", lineHeight:"1.2"}}>Beats<br />Studio Buds</h3>
                                <a href="product.html" className="shop-now">Shop Now
                                    <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                                <img className="product" src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop" alt="Earbuds" />
                            </article>

                            <article className="bento-card bento-card--black">
                                <div className="sparkle"></div>
                                <span className="eyebrow">DSLR</span>
                                <h3 style={{fontSize:"var(--text-lg)", lineHeight:"1.2"}}>Hero Camera<br />X-Series</h3>
                                <a href="product.html" className="shop-now">Shop Now
                                    <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </a>
                                <img className="product" src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format&fit=crop" alt="DSLR camera" />
                            </article>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}