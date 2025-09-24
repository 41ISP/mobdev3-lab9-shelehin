import { useState } from "react"
import Todo from "../ToDo/Todo"

const TodoList = () => {
    const [todoName, setTodoName] = useState('')
    const [todos, setTodos] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = todoName.trim();
        if (text) {
            const todo = {
                nagitme: todoName,
                id: crypto.randomUUID(),
                done: false,
            }
            setTodos((oldValue) => [todo, ...oldValue])
        }
    };
    return (
        <>
            <div className="add-todo">
                <div className="input-container">
                    <form onSubmit={handleSubmit} className="add-todo-form">
                        <input
                            value={todoName}
                            onChange={e => setTodoName(e.target.value)}
                            type="text"
                            className="todo-input"
                            placeholder="Добавить новую задачу..."
                            id="todoInput"
                        />
                        <button className="add-btn" id="addBtn">Добавить</button>
                    </form>
                </div>
            </div>

            <div className="filters">
                <button className="filter-btn active" data-filter="all">Все</button>
                <button className="filter-btn" data-filter="active">Активные</button>
                <button className="filter-btn" data-filter="completed">Завершенные</button>
            </div>

            <div className="todo-list">
                {todos.map(todo => (
                    <Todo {...todo} />
                ))}
            </div>

            <div className="stats">
                Всего: 4 | Активных: 3 | Завершено: 1
            </div>
        </>
    )
}

export default TodoList