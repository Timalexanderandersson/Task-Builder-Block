import React, { useState } from "react"
import styles from "../styles/homepage.module.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../styles/tasks.module.css";
import api from "../api/api";
import axios from "axios";


const Deletepage = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () =>{
        try {
            await axios.delete(`tasks/${taskId}`)
            navigate('/tasks')
        } catch (error) {
            
        }
    }

    return (
        <div className={styles.homepage}>
            <div className={styles.innerdiv}>
                <h2 className="mt-2">You sure you want to delete this task?</h2>
                <button className={style.buttonsubmitdelete} onClick={handleDelete}>
                    Delete task
                </button>
                <Link className={style.buttonsubmit} to="/tasks">
                    back to tasks
                </Link>
            </div>
        </div>
    )
}

export default Deletepage;