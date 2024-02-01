import { useState, useEffect } from "react";


let width = () => {
    let [widthScreen, setWidthScreen] = useState(window.innerWidth)

    useEffect(() => {
        let widthUpdated = () => {
            setWidthScreen(window.innerWidth)
        }

        window.addEventListener('resize', widthUpdated)

        return () => {
            window.removeEventListener('resize', widthUpdated)
        };
    }, []);

    return widthScreen
}

export default width