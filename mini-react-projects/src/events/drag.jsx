const Drag = () => {
  
    const handleDrop = (e) => {
        e.preventDefault()
       // const data = e.dataTransfer.getData("Text")

    }
    const allowDrop = () => {

    }

  return (
    <div className="parentbox">
      <div className="box1" onDrop={handleDrop} onDragOver={allowDrop}>
        <h6>Drag me baby!!</h6>
      </div>
      <div className="box2">
      </div>
    </div>
  );
};
export default Drag;
