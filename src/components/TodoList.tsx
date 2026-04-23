import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import { defaultTasks } from "../fixtures/defaultTasks";
import type { TodoTask } from "../fixtures/defaultTasks";

function TodoList() {
    const [todoItems, setTodoItems] = useState<TodoTask[]>(() => {
        const stored = localStorage.getItem("my-todo-items");
        return stored ? JSON.parse(stored) : defaultTasks;
    });

    const removeTask = (createdTimestamp: number) => {
        setTodoItems((prev) => {
            const updated = prev.filter((item) => item.created !== createdTimestamp);
            localStorage.setItem("my-todo-items", JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <section className="todo-section">
            <h2>My Tasks</h2>
            <ul className="todo-list">
                {todoItems.map((item, index) => (
                    <TodoItem
                        key={`${item.created}-${index}`}
                        task={item.task}
                        date={item.date}
                        time={item.time}
                        created={item.created}
                        removeTask={removeTask}
                    />
                ))}
            </ul>
            {todoItems.length === 0 && (
                <p className="todo-empty">All done! Add a new task below.</p>
            )}
            <AddTaskForm setTodoItems={setTodoItems} />
        </section>
    );
}

export default TodoList;
