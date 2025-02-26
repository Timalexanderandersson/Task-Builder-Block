import React from "react"
import styles from "../styles/signup.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Signup = () => {

    return (
        <div className={styles.bigreg}>
            <div className={styles.bigreg2}>
            <div className={styles.registration}>
                <div className={styles.registration2}>
                <h3 className="mt-2">Sign up to use Task builder block 🚀</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
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

export default Signup;