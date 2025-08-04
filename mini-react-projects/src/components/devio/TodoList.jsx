import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
//Create a to-do list component where users can add, remove, and mark items as complete.
const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [editIndex, setEditIndex] = useState(null)
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const addItem = () => {
    if(editIndex !== null) {
        const updatedItems = items.map((it, idx) => idx === editIndex ? {text: item} : it)
        setItems(updatedItems)
        setEditIndex(null)
    } else{
        setItems((prev) => [...prev, { text: item }]);
    }
    setItem("");
  };
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    if(editIndex === index){
        setEditIndex(null)
        setItem('')
    }
  };
  const editItem = (index) => {
    setItem(items[index].text)
    setEditIndex(index)
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add New Item"
        className="styled-input"
        onChange={handleChange}
        value={item}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} style={{ color: "white" }}>
              {item.text}
              <span>
                <button onClick={() => removeItem(index)}>Remove</button>
              </span>
              <span>
                <button onClick={() => editItem(index)}>Edit</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ToDoList;
