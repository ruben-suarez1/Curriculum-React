import useThemeSwitcher from "../Hooks/useThemeSwitcher"

const Home = () => {

    const { themeButtonRef, handleThemeToggle } = useThemeSwitcher();

    return (
        <>
            {/* ========== HOME ========== */}
            <section className="home" id="home">
                <div className="home__container section bd-grid">
                    <div className="home__data bd-grid">
                        <img src='/img/perfil.jpg' alt="" className="home__img" />

                        <h1 className="home__title"><b>RUBEN SUAREZ</b></h1>
                        <h3 className="home__profession">Frontend Developer</h3>
                        <span className="home__information cuality">#React, Vtex IO</span>

                        {/* Button to generate and download the pdf. Available for desktop. */}
                        <div>
                            <a download="" href="public/pdf/ResumeCv.pdf" className="home__button-movil">Download</a>
                        </div>
                    </div>

                    <div className="home__addres bd-grid">
                        <span className="home__information">
                            <i className='bx bx-envelope home__icon' ></i> rubensuarez199755@gmail.com
                        </span>
                        <span className="home__information">
                            <i className='bx bx-phone home__icon' ></i>312-202-2367
                        </span>
                    </div>
                </div>
                {/* Theme change button */}
                <i ref={themeButtonRef} id="theme-button" onClick={handleThemeToggle} className='bx bx-moon change-theme' title="Theme" ></i>

                <a href="public/pdf/ResumeCv.pdf">
                    {/* Button to generate and download nthe pdf. Available for desktop */}
                    <i className='bx bx-download generate-pdf' title="Generate PDF" id="resume-button" ></i>
                </a>

            </section>
        </>
    )
}

export default Home