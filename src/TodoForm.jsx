import { useState } from "react"

export function TodoForm({ whenSubmit }) {
  const [newItem, setNewItem] = useState("") // luo tilan, joka alkaa tyhjänä merkkijonona jota voidaan päivittää

  function handleSubmit(e) {
    e.preventDefault() // estää sivun uudelleenlatauksen
    if (newItem === "") return

    whenSubmit(newItem)
    setNewItem("") // tyhjentää newitem kentän
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Add your task</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} // Jokainen näppäinpainallus päivittää newItem-tilan.
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
      {/* lähettää lomakkeen, koska se on formin sisällä */}
    </form>
  )
}
