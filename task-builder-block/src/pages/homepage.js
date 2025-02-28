import React, { useContext } from "react"
import styles from "../styles/homepage.module.css"
import { Link } from "react-router-dom";
import { CurrentUserInfo } from "../user/userinformation";
import videoFile from '../assets/3252017-uhd_3840_2160_25fps.mp4'


const Homepagesite = () => {
    const userNow = useContext(CurrentUserInfo)

    return (
         <div className={styles.homepage}>
            <div className={styles.innerdiv}>
                {userNow ? (
                    <>
                        <h2 className="mt-2">Let's get in some tasks!</h2>
                        <p>Start creating for today!</p>
                        <Link to="/tasks" className={styles.linksinside}>Create task</Link>
                        <div>
                            <video autoPlay loop muted>
                                <source src={videoFile} type="video/mp4"/>
                                does not support this
                            </video>

                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="mt-2">Need a reminder for your daily task?</h2>
                        <p className="mt-2">Get an account and get started using task builder block</p>
                        <div className={styles.outsidediv}>
                    <div className={styles.insidediv}>
                        <Link to="/register" className={styles.linksinside}>Register</Link>
                        <Link to="/login" className={styles.linksinside}>Sign in</Link>
                    </div>
                </div>
                    </>
                )}
                
            </div>
        </div>
    );
}

export default Homepagesite;