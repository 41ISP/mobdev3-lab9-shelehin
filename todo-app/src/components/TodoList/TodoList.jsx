import Todo from "../ToDo/Todo"

const TodoList = () => {
    return (
        <>
            <div className="add-todo">
                <div className="input-container">
                    <input type="text" className="todo-input" placeholder="Добавить новую задачу..." id="todoInput" />
                    <button className="add-btn" id="addBtn">Добавить</button>
                </div>
            </div>

            <div className="filters">
                <button className="filter-btn active" data-filter="all">Все</button>
                <button className="filter-btn" data-filter="active">Активные</button>
                <button className="filter-btn" data-filter="completed">Завершенные</button>
            </div>

            <div className="todo-list">
                <Todo/>
            </div>

            <div className="stats">
                Всего: 4 | Активных: 3 | Завершено: 1
            </div>
        </>
    )
}

export default TodoList