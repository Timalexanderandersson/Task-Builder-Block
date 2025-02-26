import React from "react"
import styles from "../styles/registration.module.css"
import styles2 from "../styles/singup.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {

    return (
        <div className={styles.bigreg}>
            <div className={styles.bigreg2}>
            <div className={styles2.registration}>
                <div className={styles.registration2}>
                <h3 className="mt-2">Sign in to your account! 🚀</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Button  type="submit" className={styles.buttonsubmit}>
                        Register
                    </Button>
                </Form>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Login;