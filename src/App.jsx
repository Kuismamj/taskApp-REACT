import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import "./styles.css"
import { TodoList } from "./Todolist"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [] // jos talennettua dataa ei ole niin palautetaan tyhjä lista

    return JSON.parse(localValue) // jos löytyy se parsitaan JS-objektiksi
  })

  const [successMessage, setSuccessMessage] = useState("")
  const [messageType, setMessageType] = useState("") // Tyyppi: "added" tai "deleted"

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) // tallentaa todos listan localStorageen merkkijonoksi
  }, [todos])

  function addTodo(title) {
    // lista lisätyistä tehtävistä
    setTodos((currentTodos) => {
      const newTodo = { id: crypto.randomUUID(), title, completed: false }
      setSuccessMessage("Task added successfully") // tsetetaan onnistumisviesti
      setMessageType("added") // tsetetaan viestin tyyppi "added"
      setTimeout(() => setSuccessMessage(""), 2000) // tyhjennetään viesti 2 sekunnin kuluttua

      return [...currentTodos, newTodo] // lisää uuden tehtävän
    })
  }

  function toggletoDo(id, completed) {
    // merkitsee tehtävän valmiiksi
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      const updatedTodos = currentTodos.filter((todo) => todo.id !== id) // suodatetaan poistettavan tehtävän pois
      setSuccessMessage("Task deleted successfully")
      setMessageType("deleted")
      setTimeout(() => setSuccessMessage(""), 2000)
      return updatedTodos
    })
  }

  return (
    <>
      <TodoForm whenSubmit={addTodo} />
      {successMessage && (
        <div className={`success-message ${messageType}`}>{successMessage}</div>
      )}
      <h1 className="header">Your tasks</h1>
      <TodoList todos={todos} toggletoDo={toggletoDo} deleteTodo={deleteTodo} />
    </>
  )
}
