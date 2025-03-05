import React, { useEffect, useState } from "react"
import styles from "../styles/editpage.module.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../styles/tasks.module.css";
import api from "../api/api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";


const Editpage = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const [tasks, setTask] = useState({
        'title':'',
        'description':''
    })

    const {title, description} = tasks;
    const [errors, setError] = useState({})


    const handleChange = (event) => {
        setTask({
            ...tasks,
            [event.target.name]: event.target.value,
        })

    }

    useEffect(() => {
        const gettingtaskfunc = async () =>{
            try {
                const { data } = await axios.get(`/tasks/${taskId}`)
                setTask({
                    title:data.title,
                    description:data.description
                })
                } catch (error) {
                    setError(error.response.data)
                }
        }
        gettingtaskfunc();
    },[taskId])

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const datasave = new FormData();
        datasave.append('title', title)
        datasave.append('description', description)
        try {
            await axios.put(`/tasks/${taskId}`,{
                title: title,
                description: description
            });
            navigate('/tasks')

        } catch (error) {
            setError(error.response.data)
        }
    };


    return (
        <div className={styles.homepage}>
            <div className={styles.innerdiv}>
                <h2 className="mt-2">Edit your task</h2>
                
                <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTaskTitle">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={tasks.title}
                                onChange={handleChange}
                                placeholder="Enter task title"
                            />
                        </Form.Group>
                        {errors.title}

                        <Form.Group className="mb-3" controlId="formTaskDescription">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={tasks.description}
                                onChange={handleChange}
                                placeholder="Enter task description"
                            />
                            {errors.description}
                        </Form.Group>

                        
                        <Button type="submit" className={styles.buttonsubmit}>
                            Add Task
                        </Button>
                    </Form>
                <Link className={style.buttonsubmit} to="/tasks">
                    back to tasks
                </Link>
            </div>
        </div>
    )
}

export default Editpage;