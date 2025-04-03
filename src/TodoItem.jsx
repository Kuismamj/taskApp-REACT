export function TodoItem({ completed, id, title, toggletoDo, deleteTodo }) {
  return (
    <li>
      <label>
        {/* yhdistää tehtävän ja siihen liittyvän checkboxin*/}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggletoDo(id, e.target.checked)} // kun klikkaa niin merkitsee valmiiksi
        />
        <span>{title}</span> {/* näyttää tehtävän nimen */}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
