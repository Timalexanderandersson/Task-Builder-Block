import React, { useContext, useState } from "react"
import styles from "../styles/navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserInfo, SetCurrentUserInfo } from "../user/userinformation";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const NavBar = () => {

    const newUser = useContext(CurrentUserInfo);
    const setUserNow = useContext(SetCurrentUserInfo);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [select, Setselect] = useState(false)

    const toggleDropdown = () => {
        Setselect(!select)
    }

    const handleLogout = async () => {
          
        try {
            await axios.post('/dj-rest-auth/logout/');
            localStorage.removeItem("currentUser");
            localStorage.removeItem("token");
            document.cookie = "my-app-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "my-refresh-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
            setUserNow(null);
            handleClose(true)
            navigate('/');
        } catch (error) {

        }
    }


    const navLinks = (
        <>

            {newUser ? (
                <>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/tasks" className={styles.navLink}>Tasks</Link>
                    <Link onClick={handleShow} className={styles.navLink}>Logout</Link>
                    

                    <Modal show={show} onHide={handleClose}  >
                    <div className={styles.modals}>
                        <Modal.Header closeButton >
                            <Modal.Title >Sign out</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Sure you want to sign out?</Modal.Body>
                        <Modal.Footer >
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={handleLogout}>
                                Sign out!
                            </Button>
                        </Modal.Footer>
                        </div>
                    </Modal>
                   


                </>
            ) : (
                <>
                    <Link to="/" className={styles.navLink}>Home</Link>
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
