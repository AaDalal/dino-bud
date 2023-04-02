import React, { useCallback, useContext, useState } from 'react'
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from "../Axios/axios"
import classes from '../static/login.module.css';


function CreateTopic() {
    const { token, } = useContext(UserContext);
    const [goal, setGoal] = useState('');
    const navigate = useNavigate();

    const handleCreateTopic = useCallback(async (event) => {
        event.preventDefault();
        if (goal.length < 5) return
        const response = await axios.post('/topic/', { user1Goal: goal }, { headers: { Authorization: `Bearer ${token}` } })
        navigate(`/${response.data._id}`, { replace: true })
    }, [goal, navigate, token])

    return (
        <form onSubmit={handleCreateTopic}
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <div
            style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#f5f5f5",
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
            >  
                <div 
                style={{
                    fontWeight: "bold",
                    fontSize: "30px"
                }}
                >✅ Enter a Goal</div>
                <div className={classes.emailWrapper}>
                    <input className={classes.enterEmail}
                    style={{
                        height: "90%",
                        border: "none",
                    }}
                    placeholder='learn 📖 do 🧗 love 💖'
                    type="text"
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}>
                    </input>
                </div>
                <button 
                className={[classes.frame24]} 
                style={{
                    width: "100%",
                    color: "white",
                    fontWeight: "bold"
                }}
                type="submit">
                    Get started!
                </button>
            </div>
        </form>
    )
}

export default CreateTopic