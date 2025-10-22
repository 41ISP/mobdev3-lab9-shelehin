function Todo({name, toggleTodo, deleteTodo, id, done}) {
    return (
        <div className="todo-item">
            <input onChange={() => toggleTodo(id)} checked={done} type="checkbox" className="todo-checkbox" />
            <span className="todo-text">{name}</span>
            <button onClick={() => deleteTodo(id)} className="delete-btn">Удалить</button>
        </div>
    )
}

export default Todo