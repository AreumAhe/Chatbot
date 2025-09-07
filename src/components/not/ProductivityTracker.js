import { useState, useEffect } from "react";

const ProductivityTracker = () => {
    const [task, setTask] = useState([]);
    const [goal, setGoal] = useState();

    //Add greet first with chat-bubble

    useEffect(() => {
        fetch("http://localhost:9001/productivityBot/showAllGoals")
        .then(response => response.json())
        .then(result => setTask(result))
        .catch(err => console.error("Error fetching tasks:", err));
    },[]);

    const addGoal = () => {
        fetch("http://localhost:9001/productivityBot/setGoal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ goal: goal }) 
        })
    }

    return(
        <div className='div'>
            <div className='Header'>
                <p className='element'>Productivity Tracker</p>
                <p className='element'>☑️</p>
            </div>
            <div className="chatbot">
                {task && task.length > 0 ? (
                    task.map((taskName, index) => 
                        <p key={index}>{taskName.goal}</p>)
                    ) : (
                    <p>No data yet.</p>
                    )}
                    <input type="text" onChange={(e) => setGoal(e.target.value)}></input>
                    <button onClick={addGoal}> Add Task</button>
            </div>
        </div>
    )
}

export default ProductivityTracker;