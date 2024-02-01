import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import Container from "../container";
import Menu from "../menu"

import styles from "./Navbar.module.css";

function Navbar({ widthScreen }) {

    const [activeItem, setActiveItem] = useState(1);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (

        <nav className={styles.navbar}>
            <Container >

                <h2 className={styles.name}>Oberdan <span>Andrade</span></h2>

                {widthScreen > 1077 ? (
                    <ul className={styles.list}>

                        <li className={`${styles.item} ${activeItem === 1 ? styles.active : ""}`} onClick={() => handleItemClick(1)}>
                            <Link to="/">Home</Link>
                        </li>

                        <li className={`${styles.item} ${activeItem === 2 ? styles.active : ""}`} onClick={() => handleItemClick(2)}>
                            <Link to="/sobremim">Sobre mim</Link>
                        </li>

                        <li className={`${styles.item} ${activeItem === 3.05 ? styles.active : ""}`} onClick={() => handleItemClick(3.05)}>
                            <Link to="/projetos">Projetos</Link>
                        </li>

                        <li className={`${styles.item} ${activeItem === 4.02 ? styles.active : ""}`} onClick={() => handleItemClick(4.02)}>
                            <Link to="/contato">Contato</Link>
                        </li>

                        {activeItem && <span style={{ left: `${(activeItem - 1) * 8}em` }}></span>}

                    </ul>
                ) : (
                    <div className={styles.div_menu}>
                        <Menu />
                    </div>
                )}
            </Container>
        </nav>
    )

}

export default Navbar;
