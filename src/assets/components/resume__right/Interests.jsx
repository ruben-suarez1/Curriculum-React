const Interests = () => {
    return (
        <>
            {/* ========== INTERESTS ========== */}
            <section className="interests section">
                <h2 className="section-title">Interests</h2>

                <div className="interests__container bd-grid">
                    <div className="interests__content">
                        <i className='bx bx-headphone interests__icon'></i>
                        <span className="interests__name">Music</span>
                    </div>

                    <div className="interests__content">
                        <i className='bx bxs-plane-alt interests__icon'></i>
                        <span className="interests__name">Travel</span>
                    </div>

                    <div className="interests__content">
                        <i className='bx bx-laptop interests__icon'></i>
                        <span className="interests__name">Developer</span>
                    </div>

                    <div className="interests__content">
                        <i className='bx bx-dumbbell interests__icon'></i>
                        <span className="interests__name">Gym</span>
                    </div>

                    <div className="interests__content">
                        <i className='bx bx-message-alt-edit interests__icon'></i>
                        <span className="interests__name">Desing</span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Interests