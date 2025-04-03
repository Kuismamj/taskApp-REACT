import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggletoDo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No tasks"}
      {todos.map((todo) => {
        // käy läpi jokaisen tehtävän ja palauttaa li elementin jokaiselle
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggletoDo={toggletoDo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
