import { useEffect, useState } from "react";
import styles from "../styles/taskpage.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Gettingtasks from "../components/taskmap";
import { useNavigate } from "react-router-dom";

const Taskpage = () => {
   
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const navigate = useNavigate();
   const [errors, setError] = useState({})
  
   const [showing, setShowing] = useState([])
    const [showForm, setShowForm] = useState(false);


    const handleChange = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value,
        });
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('/tasks/', task, showing);
            
            setShowing((preTask) => [data, ...preTask])
            setTask({ title: "", description: "" });
            
            setShowForm(false);
        } catch (error) {
           
            setError(error.response.data)
        }
    };

     useEffect(() =>{
                const fetchTask = async () => {
                    try {
                        const getTask = await axios.get('/tasks/');
                        setShowing(getTask.data);
                    } catch (error) {
                       
                    }
                }
                fetchTask();
                
            },[])
   
    

    return (
        <>
        <div className={styles.taskpagediv}>
            <div className={styles.taskpagediv1}>
            <div className={styles.taskpagediv2}>
                <h2 className="mt-2" >Task List</h2>
                <Button 
                    onClick={() => setShowForm(!showForm)} 
                    className={styles.buttonsubmit}
                >
                    {showForm ? 'Cancel' : 'Add New Task'}
                </Button>

                {showForm && (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTaskTitle">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={task.title}
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
                                value={task.description}
                                onChange={handleChange}
                                placeholder="Enter task description"
                            />
                            {errors.description}
                        </Form.Group>

                        {/* Skapa uppgift knapp */}
                        <Button type="submit" className={styles.buttonsubmit}>
                            Add Task
                        </Button>
                    </Form>
                )}
                </div>
            </div>
        </div>
        
       <Gettingtasks tasks={showing}/>
        </>
    );
};

export default Taskpage;
