import './NewsLetter.css';


export default function NewsLetter() {
    return (
        <>
            {/* NEWSLETTER */}
            <section style={{background: "var(--paper)"}}>
                <div className="container">
                    <div className="newsletter">
                        <div className="newsletter-grid">
                            <div>
                                <h2>Get <strong>20% Off</strong> your first order — straight to your inbox.</h2>
                                <p>Drop your email and we'll send a one-time discount, plus first-look offers on the gear we just got in. Unsubscribe anytime.</p>
                            </div>
                            <form className="newsletter-form" onSubmit={event => {
                                event.preventDefault();
                                event.currentTarget.querySelectore('button').textContent = 'Sent ✓';
                            }}>
                                <input type="email" required placeholder="Enter your email" aria-label="Email address" />
                                <button className="btn" type="submit">Subscribe →</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}