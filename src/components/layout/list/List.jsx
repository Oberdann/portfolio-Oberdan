import styles from "./List.module.css"

function List({ data, customNameUl, customNameLi, imgs, customListImg, customTitleImg, customImgImg }) {
    return (
        <ul className={`${styles.ul}  ${styles[customNameUl]}`}>


            {data && data.map((item, index) => (

                <li className={`${styles.li}  ${styles[customNameLi]}`} key={index}> {item} </li>

            ))}

            {imgs && imgs.map((img, index) => (

                <li className={styles[customListImg]} key={index}>

                    <h4 className={styles[customTitleImg]}>{img.name}</h4>

                    <img src={img.src} alt={index} className={styles[customImgImg]} ></img>

                    {img.text && (

                        <p>{img.text}</p>

                    )}

                </li>

            ))
            }
        </ul>
    )
}

export default List