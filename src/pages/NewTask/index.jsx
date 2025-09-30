import { useState } from "react";
import { useDispatch } from "../../libs/react-redux";
import style from "./NewTask.module.scss";
import { useNavigate } from "react-router-dom";

function NewTask() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (value.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: value,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    navigate("/tasks-list");
  };

  return (
    <div className={style.NewTask}>
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
