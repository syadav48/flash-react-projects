import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(items[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
    e.target.classList.add('dragging');
  };

  const handleDragOver = (index) => {
    if (draggedItem === null) return;

    const draggedOverItem = items[index];
    
    // If the item is dragged over itself, ignore
    if (draggedItem.id === draggedOverItem.id) return;

    // Filter out the dragged item
    let newItems = items.filter(item => item.id !== draggedItem.id);
    
    // Insert the dragged item after the dragged over item
    newItems.splice(index, 0, draggedItem);
    
    setItems(newItems);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.classList.remove('drag-over');
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('dragging');
    setDraggedItem(null);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove('drag-over');
  };

  return (
    <div className="drag-drop-container">
      <h2>Drag & Drop List</h2>
      <ul className="drag-drop-list">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="drag-drop-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div className="list-state">
        <h3>Current Order:</h3>
        <ol>
          {items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DragDropList;