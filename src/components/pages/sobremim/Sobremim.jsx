import Container from "../../layout/container"
import Slide from "../../layout/slide"
import List from "../../layout/list"

import imgJs from "../../../img/javascript.png"
import imgTs from "../../../img/typescript.png"
import imgAllBlackAndWhite from "../../../img/imgSkills"

import styles from "./Sobremim.module.css"


let slide = [
    {
        id: 1,
        img: imgJs,
        text: "JavaScript é uma linguagem de programação web, crucial para tornar páginas interativas em todos os navegadore. Além do front-end, é comumente usado no desenvolvimento back-end, incluindo o ambiente Node.js."
    },
    {
        id: 2,
        img: imgTs,
        text: "TypeScript, extensão do JavaScript com tipagem opcional, destaca-se por código robusto. Versátil no desenvolvimento web, utilizado tanto no front-end quanto no back-end, incluindo ambientes Node.js."
    }
];



function Sobremim({ widthScreen }) {

    return (

        <div>

            <section className={styles.apresentation}>

                <h2 className={styles.apresentation_title}>Sobre Mim</h2>

                <p className={styles.apresentation_text}>
                    Neste espaço, convido você a explorar em detalhes quem sou, meu trabalho e, sobretudo, minhas habilidades atuais em programação e tecnologia.
                </p>

            </section>

            <Container customClass="sobremim">


                <section className={styles.section_container}>

                    <h3 className={styles.section_title}>Me conheça:</h3>

                    <p className={styles.section_text}>

                        Meu nome é Oberdan Andrade da Silva, tenho 19 anos e sou um estudante dedicado de programação fullstack.
                        <br /><br />
                        Estou empenhado em construir aplicações web inovadoras, com experiência que se estende desde o desenvolvimento do front-end até o back-end, utilizando linguagens como <span>Javascript e Typescript</span>. Possuo conhecimentos <span>básicos em Java</span> também. Tenho um bom domínio em frameworks como <span>React, Nest e Express</span>, nos quais já realizei diversos projetos, desde os de baixa complexidade até os mais complexos. Além disso, tenho experiência em utilizar banco de dados, sou familiarizado com <span>Git e GitHub</span>, e possuo conhecimentos elementares em AWS.
                        <br /><br />
                        Estou aberto a novas oportunidades profissionais que me permitam contribuir, aprender e evoluir. Caso surja uma oportunidade alinhada às minhas habilidades e experiência, não hesite em entrar em contato
                        comigo.
                    </p>
                </section>


                {widthScreen > 1077 && (

                    <aside className={styles.aside_container}>

                        <div>

                            <Slide data={slide} customClassText="text_sobremim" customClassImg="img_sobremim" />

                        </div>
                        
                    </aside>
                )
                }

            </Container>


            <section className={styles.skills}>

                <h2 className={styles.skills_title}>Habilidades: </h2>

                <div className={styles.skills_container}>

                    <List
                        imgs={imgAllBlackAndWhite}
                        customNameUl="skills_imgs"
                        customListImg="list_container"
                        customTitleImg="list_title"
                        customImgImg="img_list"
                    />

                </div>

            </section>

        </div>


    )
}

export default Sobremim