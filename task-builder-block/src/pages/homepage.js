import React from "react"
import styles from "../styles/homepage.module.css"
import { Link } from "react-router-dom";


const Homepagesite = () => {

    return (
        <div className={styles.homepage}>
            <div className={styles.innerdiv}>
                <h2 className="mt-2">Need a reminder for your daily task?</h2>
                <p className="mt-2">Get an account and get started using task builder block</p>
                <div className={styles.outsidediv}>
                <div className={styles.insidediv}>
                    <Link to="/register" className={styles.linksinside}>Register</Link>
                    <Link to="/login" className={styles.linksinside}>Sign in</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Homepagesite;