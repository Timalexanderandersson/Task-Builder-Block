import React, { useState } from "react"
import styles from "../styles/navbar.module.css"


const NavBar = () => {

    const [select, Setselect] = useState(false)

    const toggleDropwdown = () => {
        Setselect(!select)
        console.log("works and its true")
    }
    return (
<>
        <button onClick={toggleDropwdown} className={styles.buttonmanu}><i class="fa-solid fa-angle-down"></i></button>
        {select && (
         <div className={styles.bigdiv}>
         <div className={styles.navbar}>
         <a href="#/" className={styles.navLink}>Home</a>
         <a href="#/" className={styles.navLink}>Sign in</a>
         <a href="#/" className={styles.navLink}>Register</a>
         </div>
         </div>
        )}
       
    </>

       
        

    )
}

export default NavBar;