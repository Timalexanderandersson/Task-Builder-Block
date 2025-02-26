import React, { useState } from "react"
import styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom';


const NavBar = () => {

    const [select, Setselect] = useState(false)

    const toggleDropwdown = () => {
        Setselect(!select)
        console.log("works and its true")
    }
    return (
<>
<button onClick={toggleDropwdown} className={styles.buttonmanu}>
  <i className="fa-solid fa-angle-down"></i>
</button>

<div className={styles.hidinglink}>
  <div className={styles.bigdiv}>
    <div className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/signin" className={styles.navLink}>Sign in</Link>
      <Link to="/register" className={styles.navLink}>Register</Link>
    </div>
  </div>
</div>

{select && (
  <div className={styles.bigdiv}>
    <div className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/signin" className={styles.navLink}>Sign in</Link>
      <Link to="/register" className={styles.navLink}>Register</Link>
    </div>
  </div>
)}
       
    </>

       
        

    )
}

export default NavBar;