import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <a className="skip-link" href="#main">Skip to content</a>

            {/* Top utility strip */}
            <div className="utility">
                <div className="container">
                    <span className="promo">
                        <span className="tag">SALE</span>
                        Free shipping on orders over $50 · 30-day returns
                    </span>
                    <span className="links">
                        <a href="#">Track order</a>
                        <a href="#">Help</a>
                        <a href="#">EN · USD</a>
                    </span>
                </div>
            </div>

            {/* Header */}
            <header className="site-header">
                <div className="container">
                    <NavLink to="/" className="brand">
                        <span className="brand-mark">I</span>
                        Ivy
                    </NavLink>

                    <form className="search" role="search" onSubmit={event.preventDefault()}>
                        <input type="text" placeholder="Search for products, brands, categories…" aria-label="Search the store" />
                        <button type="submit" aria-label="Search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                        </button>
                    </form>

                    <div className="icon-row">
                        <a href="#" className="icon-btn" aria-label="Account">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>
                        </a>
                        <a href="#" className="icon-btn" aria-label="Wishlist">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            <span className="count">3</span>
                        </a>
                        <NavLink to="/cart" className="icon-btn icon-btn--cart" aria-label="Cart">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2l-2 5v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-2-5z" /><path d="M4 7h16" /><path d="M16 11a4 4 0 0 1-8 0" /></svg>
                            <span className="count">2</span>
                        </NavLink>
                        <button className="nav-toggle" aria-label="Open menu" aria-expanded="false">≡</button>
                    </div>
                </div>
            </header>

            {/* Category nav */}
            <nav className="nav-bar" aria-label="Primary">
                <div className="container">
                    <a href="shop.html" className="all-cats">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        All Categories
                    </a>
                    <div className="main-nav">
                        <NavLink to="/" aria-current="page">Home</NavLink>
                        <NavLink to="/shop">Shop ▾</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <span className="nav-cta">UP TO <strong>60% OFF</strong> ALL ITEMS</span>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div className="drawer" id="drawer" aria-hidden="true">
                <div className="drawer-head">
                    <a href="index.html" className="brand"><span className="brand-mark">S</span> Sprylo</a>
                    <button className="drawer-close" aria-label="Close menu">Close ✕</button>
                </div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/cart" className="btn btn--indigo" style={{marginTop:"var(--s5)", justifyContent:"center"}}>View cart →</NavLink>
            </div>
        </>
    )
}