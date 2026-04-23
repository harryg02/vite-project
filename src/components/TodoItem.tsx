interface TodoItemProps {
    task: string;
    date: string;
    time: string;
    created: number;
    removeTask: (createdTimestamp: number) => void;
}

const TodoItem = ({ task, date, time, created, removeTask }: TodoItemProps) => {
    return (
        <li className="todo-item">
            <span className="todo-task">{task}</span>
            <span className="todo-meta">
                {date} {time}
            </span>
            <button
                className="todo-done-btn"
                type="button"
                onClick={() => removeTask(created)}
            >
                Done
            </button>
        </li>
    );
};

export default TodoItem;
