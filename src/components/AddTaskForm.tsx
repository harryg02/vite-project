import { useState } from "react";
import type { TodoTask } from "../fixtures/defaultTasks";

interface AddTaskFormProps {
    setTodoItems: React.Dispatch<React.SetStateAction<TodoTask[]>>;
}

const AddTaskForm = ({ setTodoItems }: AddTaskFormProps) => {
    const [taskDescription, setTaskDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [dueTime, setDueTime] = useState("");

    const addTask = () => {
        if (taskDescription && dueDate) {
            setTodoItems((previousTodoItemsValue) => {
                const newItem: TodoTask = {
                    task: taskDescription,
                    created: Date.now(),
                    date: dueDate,
                    time: dueTime || "ASAP",
                };
                const updated = [newItem, ...previousTodoItemsValue];
                localStorage.setItem("my-todo-items", JSON.stringify(updated));
                return updated;
            });
            setTaskDescription("");
            setDueDate("");
            setDueTime("");
        }
    };

    return (
        <section className="todo-form">
            <div className="todo-input-group">
                <input
                    type="text"
                    className="todo-input todo-input-task"
                    placeholder="Task description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <input
                    type="date"
                    className="todo-input"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <input
                    type="time"
                    className="todo-input"
                    value={dueTime}
                    onChange={(e) => setDueTime(e.target.value)}
                />
                <button
                    className="todo-add-btn"
                    type="button"
                    disabled={!taskDescription || !dueDate}
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
        </section>
    );
};

export default AddTaskForm;
