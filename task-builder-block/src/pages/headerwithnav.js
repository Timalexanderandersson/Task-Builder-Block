import React from "react" 
import NavBar from "../components/Navbar"
import styles from "../styles/header.module.css"

/**
 * 
 * This contains everything in the header section.
 * Navabar.
 */
const Headerwithnav = () => {

    return(
        <div className={styles.headerapp}>
            <h1 className={styles.headerh1}>Task builder block</h1>
            <p className={styles.paragraph}>Just a quick reminder for all your tasks</p>
            < NavBar />
        </div>
    )
}

export default Headerwithnav;