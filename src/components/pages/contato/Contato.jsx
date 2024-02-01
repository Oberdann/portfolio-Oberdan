import LinkButton from "../../layout/linkButton/"

import imgs from "../../../img/imgContact"

import styles from "../contato/Contato.module.css"

function Contato() {
    return (

        <div className={styles.contact_container}>

            <h2 className={styles.contact_title}>Contato</h2>

            <p className={styles.contact_text}>Abaixo, você encontrará todos os meios de contato para se conectar comigo</p>

            <LinkButton 
            img={imgs}
            customClass="contact_button"
            customClassContainer="contact_container"
            customClassTitle="contact_title"
            customClassImg="contact_img"
            customClassText="contact_text"
            />

        </div>
    )
}

export default Contato