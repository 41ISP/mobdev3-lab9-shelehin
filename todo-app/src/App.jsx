import './App.css'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className="container">
        <div className="header">
            <h1>Todo App</h1>
            <p>Управляйте своими задачами</p>
        </div>

      <TodoList />
    </div>
  )
}

export default App
