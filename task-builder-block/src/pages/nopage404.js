import React from "react"
import styles from "../styles/homepage.module.css"
import { Link } from "react-router-dom";


const Errorpage = () => {

    return (
        <div className={styles.homepage}>
            <div className={styles.innerdiv}>
                <h2 className="mt-2">No page 404</h2>
            </div>
        </div>
    )
}

export default Errorpage;