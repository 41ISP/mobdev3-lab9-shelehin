const Stats = ({todos}) => {

    const finished = todos.filter(todo => todo.done);

    return (
        <div className="stats">
                Всего: {todos.length} | Активных: {todos.length - finished.length} | Завершено: {finished.length}
            </div>
    )
}

export default Stats