const Experience = () => {
    return (
        <>
            {/* ========== EXPERIENCE ========== */}
            <section className="experience section" id="experience">
                <h2 className="section-title">EXPERIENCIA</h2>

                <div className="experience__container bd-grid">
                    <div className="experience__content">
                        <div className="experience__time">
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div className="experience__data db-grid">
                            <h3 className="experience__tittle">INGENIERO DE SISTEMAS</h3>
                            <span className="experience__company">De 2020 a 2021 | Alcaldía de El Pital</span>
                            <br />
                            <span className="experience__company">Práctica Académica</span>
                            <br />
                            <br />
                            <p className="experience__decription">Colaboración en la prevención de fallas a los servidores y la red, monitoreando su desempeño.</p>
                            <p className="experience__decription">Desarrollo de Herramienta HELPDESK para el manejo interno.</p>
                            <br />
                            <p>FrontEnd: Laravel + Bootstrap.</p>
                            <p>BackEnd: PHP + MongoDB.</p>
                            <br />
                        </div>
                    </div>

                    <div className="experience__content">
                        <div className="experience__time">
                            <span className="experience__rounder"></span>
                        </div>

                        <div className="experience__data db-grid">
                            <h3 className="experience__tittle">DESARROLLADOR WEB VTEX IO</h3>
                            <span className="experience__company">Desarrollador Mid Level</span>
                            <br />
                            <span className="experience__company">De 2022 - Actual | ITGlobers - Grupo AKAES</span>
                            <br />
                            <br />
                            <p className="experience__decription">Desarrollo web con la arquitectura basada en componentes de VTEX IO para construir interfaces de usuario interactivas, optimizando el rendimiento de la tienda y asegurarndo de que todas las características estén en perfecto funcionamiento. También responsable de la integración de sistemas, la optimización de la velocidad de carga y la personalización de la apariencia de la tienda según los requisitos del cliente.</p>
                            <br />
                            <p>FrontEnd: Reac.js + JSON + TypeScript + VTEX IO.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience