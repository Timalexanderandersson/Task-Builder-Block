import React, { useState } from "react"
import styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [select, Setselect] = useState(false)

    const toggleDropdown = () => {
        Setselect(!select)
    }

    return (
        <>

            <button onClick={toggleDropdown} className={styles.buttonmanu}>
                <i className="fa-solid fa-angle-down"></i>
            </button>

           
            <div className={styles.hidinglink}>
                <div className={styles.bigdiv}>
                    <div className={styles.navbar}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                        <Link to="/login" className={styles.navLink}>Sign in</Link>
                        <Link to="/register" className={styles.navLink}>Register</Link>
                    </div>
                </div>
            </div>


            {select && (
                <div className={styles.bigdiv1}>
                    <div className={styles.navbar}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                        <Link to="/login" className={styles.navLink}>Sign in</Link>
                        <Link to="/register" className={styles.navLink}>Register</Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar;
