import { useEffect, useState } from "react";
import style from "./EditTask.module.scss";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "../../libs/react-redux";

function EditTask() {
  const [task, setTask] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id: editTaskID } = useParams();
  const editTask = useSelector((state) =>
    state.tasks.find((t) => t.id + "" === editTaskID)
  );

  useEffect(() => {
    if (!editTaskID) return;
    if (!editTask) {
      fetch(`http://localhost:3001/tasks/${editTaskID}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTask(data);
          }
        });
    } else {
      setTask(editTask);
    }
  }, [editTaskID, editTask]);

  const handleEditTask = async () => {
    if (task.title.trim() === "") return;

    const newTask = {
      ...task,
      title: task.title,
    };
    const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_TASK", payload: data });
      navigate("/tasks-list");
    } else {
      console.error("Failed to add task");
    }
  };

  return (
    <div className={style.EditTask}>
      <Link to="/tasks-list">Back To Task List</Link>
      <h1>EditTask Page</h1>
      <input
        type="text"
        value={task ? task.title : ""}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <button
        onClick={handleEditTask}
        disabled={task ? task.title.trim() === "" : true}
      >
        Edit Task
      </button>
    </div>
  );
}

export default EditTask;
