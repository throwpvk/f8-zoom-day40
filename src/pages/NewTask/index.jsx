import { useState } from "react";
import { useDispatch } from "../../libs/react-redux";
import style from "./NewTask.module.scss";
import { Link, useNavigate } from "react-router-dom";

function NewTask() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleAddTask = async () => {
    if (value.trim() === "") return;

    const newTask = {
      id: Date.now() + "",
      title: value,
    };
    const response = await fetch(
      "https://json-server-j1up.onrender.com/redux-tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "ADD_TASK", payload: data });
      navigate("/tasks-list");
    } else {
      console.error("Failed to add task");
    }
  };

  return (
    <div className={style.NewTask}>
      <Link to="/tasks-list">Back To Task List</Link>
      <h1>NewTask Page</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTask} disabled={value.trim() === ""}>
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
