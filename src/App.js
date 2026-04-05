import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (item.trim() === "") return;
    setList([...list, item]);
    setItem("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleRemove = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Items to List</h2>

        <div className="input-group">
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button type="button" onClick={handleAdd}>Add</button>
        </div>

        <ul>
          {list.map((val, index) => (
            <li key={index} className="list-item">
              <span>{val}</span>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}