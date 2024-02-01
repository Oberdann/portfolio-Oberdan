import LinkButton from "../../layout/linkButton/LinkButton"

import img from "../../../img/imgProject"

import styles from "./Projetos.module.css"

function Projetos() {
    
    return (
        <div className={styles.container}>

            <h2 className={styles.title}>Meus projetos</h2>

            <p className={styles.text}>Aqui você pode verificar alguns dos meus projetos</p>

            <LinkButton
                img={img}
                customClass="project"
                customClassContainer="project_container"
                customClassTitle="project_title"
                customClassImg="project_img"
                customClassText="project_text" />

        </div>
    )
}

export default Projetos