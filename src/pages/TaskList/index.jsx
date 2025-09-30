import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../libs/react-redux";
import style from "./TaskList.module.scss";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (tasks.length === 0) {
      fetch("http://localhost:3001/tasks")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SET_TASKS", payload: data });
        });
    }
  }, [tasks, dispatch]);

  return (
    <div className={style.TaskList}>
      <h1>TaskList Page</h1>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/new-task")}>Add new task</button>
    </div>
  );
}

export default TaskList;
