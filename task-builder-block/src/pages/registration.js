import React, { useEffect, useState } from "react"
import styles from "../styles/registration.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import api from '../api/api'


const Registrations = () => {

    const [registers, setRegisters] = useState({
        'username':"",
        'password1':"",
        'password2':"",
    })
    const navigate = useNavigate();
    const [errors, setError] = useState({})

    const {username, password1, password2} = registers;

    const handleChange = (event) => {
        setRegisters({
            ...registers,
            [event.target.name]: event.target.value,
        })

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post('/dj-rest-auth/registration/', registers)
            navigate('/')
        } catch (error) {
            setError(error.response.data)
        }

    }

    return (
        <div className={styles.bigreg}>
            <div className={styles.bigreg2}>
            <div className={styles.registration}>
                <div className={styles.registration2}>
                <h3 className="mt-2">Sign up to use Task builder block 🚀</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text"
                        name="username"
                        value={username}
                         placeholder="Enter username"
                         onChange={handleChange} />
                         {errors.username}
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                         placeholder="Enter password"
                         name="password1"
                         value={password1}
                         onChange={handleChange} />
                         {errors.password1}
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password"
                         placeholder="Confirm password"
                         name="password2"
                         value={password2}
                         onChange={handleChange} />
                         {errors.password2}
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