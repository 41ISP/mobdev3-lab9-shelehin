import { useEffect, useState } from "react"
import Todo from "../ToDo/Todo"
import Stats from "../Stats/Stats"
import FilterButtons from "../FilterButtons/FilterButtons"

const TodoList = () => {
    const [todoName, setTodoName] = useState('')
    const [todos, setTodos] = useState([])
    const [currentFilter, setCurrentFilter] = useState('all')
    const [filter, setFilter] = useState(todos)
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = todoName.trim();
        if (text) {
            const todo = {
                name: todoName,
                id: crypto.randomUUID(),
                done: false,
            }
            setTodos((oldValue) => [todo, ...oldValue])
        }
    };

    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        const getFilteredTodo = () => {
            switch (currentFilter) {
                case 'active':
                    return todos.filter(todo => !todo.done);
                case 'completed':
                    return todos.filter(todo => todo.done);
                default:
                    return todos;
            }
        }
        console.log(todos);

        setFilter(getFilteredTodo())
    }, [currentFilter, todos])


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

            <FilterButtons setCurrentFilter={setCurrentFilter} currentFilter={currentFilter} />


            <div className="todo-list">
                {filter.map(todo => (
                    <Todo key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} {...todo} />
                ))}
            </div>

            <Stats todos={todos} />

        </>
    )
}

export default TodoList