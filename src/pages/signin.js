import React, { useContext, useEffect, useState } from "react"
import styles from "../styles/registration.module.css"
import styles2 from "../styles/singup.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

import { SetCurrentUserInfo } from "../user/userinformation";
import axios from "axios";




const Login = () => {

    const setUpUser = useContext(SetCurrentUserInfo);

    const [logins, setLogins] = useState({
        'username':"",
        'password':"",
       
    })
    const navigate = useNavigate();
    const [error, setError] = useState({})

    const { username, password} = logins;

    const handleChange = (event) => {
        setLogins({
            ...logins,
            [event.target.name]: event.target.value,
        })

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('/dj-rest-auth/login/', logins);
            localStorage.setItem("currentUser", JSON.stringify(data.user));
            setUpUser(data.user);
            navigate('/');
        } catch (error) {
            setError(error.response.data); 
        }
    };
    

    return (
        <div className={styles.bigreg}>
            <div className={styles.bigreg2}>
            <div className={styles2.registration}>
                <div className={styles.registration2}>
                <h3 className="mt-2">Sign in to your account! 🚀</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                        name="username"  
                        value={username}
                        onChange={handleChange}
                        placeholder="Enter username" />
                        {error.username}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        onChange={handleChange}
                        name="password"  
                        value={password} placeholder="Enter password" />
                        {error.password}
                    </Form.Group>

                    <Button  type="submit" className={styles.buttonsubmit}>
                        Sign in
                    </Button>
                </Form>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Login;