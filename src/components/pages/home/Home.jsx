import { IoRocketOutline } from "react-icons/io5";


import developerImg from "../../../img/pessoaProgramacao.png"
import Container from "../../layout/container"
import LinkButton from "../../layout/linkButton";

import imgs from "../../../img/imgHome"

import styles from "./Home.module.css"

function Home({ widthScreen }) {
    return (
        <section className={styles.section_container}>

            <div className={styles.div_section}>

                <Container>

                    <div className={styles.divLeft}>

                        <h4 className={styles.stack}>Full Stack Developer</h4>

                        <h2 className={styles.presentation}>Me chamo <span>Oberdan</span><br />Sou um Desenvolvedor<span className={styles.span_gradient}><br />Full Stack</span> <IoRocketOutline className={styles.rocket_icon} /></h2>

                        <p className={styles.text}>Bem-vindo ao meu portfólio. Atualmente, sou um estudante de programação em transição para o mercado de trabalho, buscando oportunidades para aplicar meus conhecimentos e habilidades.</p>

                        <Container customClass="icons">

                            <div className={styles.items}>
                                <LinkButton to="/"
                                    img={imgs}
                                    customClass="btn_img"
                                    customClassImg="img_icon"
                                    customClassContainer={"home_container"}
                                />

                            </div>

                            <LinkButton
                            to="/contato"
                            text="Contate-me"
                            customClass="contact"
                            classWidth={`${widthScreen < 641 ? "button_cell" : ""}`}/>

                        </Container>

                    </div>

                    {widthScreen > 1077 && (
                        <div className={styles.divRight}>

                            <img src={developerImg} alt="Imagem de um programador" className={styles.img} />

                        </div>

                    )
                    }
                </Container>
            </div>

        </section>
    )
}

export default Home