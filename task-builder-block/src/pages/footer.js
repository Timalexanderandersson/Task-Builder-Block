import React from "react" 
import styles from "../styles/footer.module.css"

const Footer = () => {

    return(
        <div className={styles.footer}>
            <div className={styles.innerdiv}>
            <p>&copy; Task Builder block 2025</p>
            </div>
        </div>
    )
}

export default Footer;