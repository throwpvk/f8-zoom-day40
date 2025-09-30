import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../libs/react-redux";
import style from "./TaskList.module.scss";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/tasks/${item.id}/edit`);
  };

  const handleDeleteTask = async (id) => {
    if (!confirm("Are you sure to delete this task?")) return;

    const response = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch({ type: "REMOVE_TASK", payload: id });
    } else {
      console.error("Failed to delete task");
    }
  };

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
          <div key={item.id} className={style.taskItem}>
            <li onClick={() => handleItemClick(item)}>{item.title}</li>
            <button
              onClick={() => handleDeleteTask(item.id)}
              className={style.deleteButton}
              title="Delete Task"
            >
              ✕
            </button>
          </div>
        ))}
      </ul>
      <button onClick={() => navigate("/new-task")}>Add new task</button>
    </div>
  );
}

export default TaskList;
