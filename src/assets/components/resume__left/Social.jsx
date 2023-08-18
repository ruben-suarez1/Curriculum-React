const Social = () => {
    return (
        <>
            {/* ========== SOCIAL ========== */}
            <section className="social section">
                <h2 className="section-title">SOCIAL</h2>

                <div className="social__container bd-grid">
                    <a href="https://www.linkedin.com/in/ruben-suarez1/" target="__blank" className="social__link">
                        <i className='bx bxl-linkedin-square social__icon'></i>https://www.linkedin.com/in/ruben-suarez1/
                    </a>
                    <a href="https://github.com/ruben-suarez1" target="__blank" className="social__link">
                        <i className='bx bxl-github social__icon' ></i>https://github.com/ruben-suarez1
                    </a>
                    <a href="https://github.com/ruben-suarez1" target="__blank" className="social__link">
                    <i className='bx bxs-briefcase-alt-2 social__icon'></i>https://ruben-suarez.com
                    </a>
                </div>
            </section>
        </>
    )
}

export default Social