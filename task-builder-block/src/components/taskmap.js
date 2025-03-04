import { useEffect, useState } from "react";
import styles from "../styles/tasks.module.css";
import { Link } from 'react-router-dom';

const Gettingtasks = ({ tasks }) => {
    const [checked, setChecked] = useState(() => {
        
        const savedChecked = JSON.parse(localStorage.getItem("checkedTasks")) || {};
        return savedChecked;
    });
 
    const [expandedTasks, setExpandedTasks] = useState({});

    useEffect(() => {
        localStorage.setItem("checkedTasks", JSON.stringify(checked));
    }, [checked]);

    const handleCheckboxChange = (taskId) => {
        setChecked((prevChecked) => {
            const updatedChecked = {
                ...prevChecked,
                [taskId]: !prevChecked[taskId],
            };
            localStorage.setItem("checkedTasks", JSON.stringify(updatedChecked));
            return updatedChecked;
        });
    };

    const toggleTask = (taskId) => {
        setExpandedTasks((prevExpanded) => ({
            ...prevExpanded,
            [taskId]: !prevExpanded[taskId],
        }));
    };


    return (
        <div className={styles.containertask}>
            {tasks.map((task) => (
                <div 
                    key={task.id}
                    className={`${styles.innercontainer} ${checked[task.id] ? styles.checked : ""}`}
                ><button onClick={() => toggleTask(task.id)} className={styles.buttonsubmitsecond}>
                {expandedTasks[task.id] ? "Close " : "Open"}
            </button>
                    <div className={styles.divfortask}>
                        <h1>{task.title}</h1>
                        {expandedTasks[task.id] && (
                            <>
                                <h5>Description</h5>
                                <p className={styles.paragraph}>{task.description}</p>
                                <div className={styles.checkingbooox}>
                                    <input
                                        type="checkbox"
                                        className={styles.checkboxing}
                                        checked={checked[task.id] || false}
                                        onChange={() => handleCheckboxChange(task.id)}
                                    />
                                </div>
                                <p> Created at <strong>{task.created_at}</strong></p>
                                <Link to={`/delete/${task.id}`} className={styles.buttonsubmitdelete}>Delete task</Link>
                                <Link to={`/edit/${task.id}`}className={styles.buttonsubmit}>Edit task</Link>
                     
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gettingtasks;
