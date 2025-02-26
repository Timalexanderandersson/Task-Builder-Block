import React, { useState } from "react"
import styles from "../styles/registration.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Registrations = () => {

    const [registers, setRegisters] = useState({
        'username':"",
        'password':"",
        'password2':"",
    })

    const {username, password, password2} = registers;

    const handleChange = (event) => {
        setRegisters({
            ...registers,
            [event.target.name]: event.target.value,
        })

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            
        } catch (error) {
            
        }

    }

    return (
        <div className={styles.bigreg}>
            <div className={styles.bigreg2}>
            <div className={styles.registration}>
                <div className={styles.registration2}>
                <h3 className="mt-2">Sign up to use Task builder block 🚀</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text"
                        name="username"
                        value={username}
                         placeholder="Enter username"
                         onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                         placeholder="Enter password"
                         name="password"
                         value={password}
                         onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password"
                         placeholder="Confirm password"
                         name="password2"
                         value={password2}
                         onChange={handleChange} />
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

export default Registrations;