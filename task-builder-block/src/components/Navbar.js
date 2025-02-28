import React, { useContext, useEffect, useState } from "react"
import styles from "../styles/navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserInfo, SetCurrentUserInfo } from "../user/userinformation";
import api from "../api/api";



const NavBar = () => {

    const newUser = useContext(CurrentUserInfo);
    const setUserNow = useContext(SetCurrentUserInfo);
    const navigate = useNavigate();



    const [select, Setselect] = useState(false)

    const toggleDropdown = () => {
        Setselect(!select)
    }

    const handleLogout = async () => {
        try {
            const response = await api.post('/dj-rest-auth/logout/');
            setUserNow(null); 
            navigate('/');
        } catch (error) {
           
        }
    }
    

    const navLinks = (
        <>
            <Link to="/" className={styles.navLink}>Home</Link>
            {newUser ? (
                <>
                    <Link onClick={handleLogout} className={styles.navLink}>Logout</Link>
                </>
            ) : (
                <>
                    <Link to="/login" className={styles.navLink}>Sign in</Link>
                    <Link to="/register" className={styles.navLink}>Register</Link>
                </>
            )}
        </>
    );

    return (
        <>
        {newUser && <div className={styles.username}> Welcome {newUser.username}</div>}
            <button onClick={toggleDropdown} className={styles.buttonmanu}>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className={styles.hidinglink}>
                <div className={styles.bigdiv}>
                    <div className={styles.navbar}>
                        {navLinks}
                    </div>
                </div>
            </div>

            {select && (
                <div className={styles.bigdiv1}>
                    <div className={styles.navbar}>
                        {navLinks}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
