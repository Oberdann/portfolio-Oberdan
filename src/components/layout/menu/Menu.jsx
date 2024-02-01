import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";



import styles from "./Menu.module.css"
import Container from "../container";


function Menu() {
    let [activeMenu, setActiveMenu] = useState(false)

    let clickInBars = () => setActiveMenu(!activeMenu)

    return (
        <div className={`${styles.container} ${activeMenu ? styles.container_active : ""}`}>
            {
                activeMenu && (
                    <ul className={styles.list}>

                        <li className={`${styles.item} `}>
                            <Link to="/">Home</Link>
                        </li>

                        <li className={`${styles.item}`}>
                            <Link to="/sobremim">Sobre mim</Link>
                        </li>

                        <li className={`${styles.item} $`} >
                            <Link to="/projetos">Projetos</Link>
                        </li>

                        <li className={`${styles.item} `} >
                            <Link to="/contato">Contato</Link>
                        </li>

                    </ul>
                )
            }
           {
            !activeMenu ? (
                <FaBars onClick={clickInBars} className={styles.fabars} />
            ) : (
                < FaTimes onClick={clickInBars} className={styles.fatimes}/>
            )
           }
        </div>
    )
}

export default Menu