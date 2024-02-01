import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import styles from "./LinkButon.module.css"

function LinkButton({
    to,
    img,
    text,
    classWidth,
    customClass,
    customClassImg,
    customClassText,
    customClassTitle,
    customClassContainer
}) {

    const [isHovered, setIsHovered] = useState(false);

    let isPageProject = useLocation().pathname === "/projetos"

    let handleMouseEnter;
    let handleMouseLeave;

    if (isPageProject) {
        handleMouseEnter = () => {
            setIsHovered(true);
        };

        handleMouseLeave = () => {
            setIsHovered(false);
        };

    }

    return (

        <div className={`${styles.btn} ${styles[customClass]} ${styles[classWidth]}`}>

            {img ? img.map((item, index) => (

                <Link
                    key={index}
                    to={item.to}
                    className={`${styles.container} ${styles[customClassContainer]} ${isHovered ? styles.blur : ""}`}
                    target="_blank"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    {item.title && (
                        <h3 className={styles[customClassTitle]}>{item.title}</h3>
                    )}

                    <img src={item.src} alt="" className={styles[customClassImg]} />

                    {item.text && (
                        <p className={styles[customClassText]}>{item.text}</p>
                    )}
                </Link>
            )) : (
                <Link className={styles[customClass]} to={to}> <p>{text}</p> </Link>
            )}
        </div>
    )
}


export default LinkButton