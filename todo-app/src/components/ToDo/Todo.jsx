function Todo(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" className="todo-checkbox" />
            <span className="todo-text">{props.name}</span>
            <button className="delete-btn">Удалить</button>
        </div>
    )
}

export default Todo