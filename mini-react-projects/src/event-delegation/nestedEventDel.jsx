function NestedDelegation() {
  const handleParentClick = (event) => {
    console.log("Parent div clicked!");
  };

  const handleChildClick = (event) => {
    // Stop event from bubbling up to the parent div
    event.stopPropagation();
    console.log("Child button clicked! (Propagation stopped)");
  };

  const handleLinkClick = (event) => {
    // Prevent default link navigation
    event.preventDefault();
    console.log("Link clicked! (Default prevented)");
    // Do something else, e.g., open a modal
  };

  return (
    <div onClick={handleParentClick} style={{ border: '1px solid black', padding: '20px', margin: '50px' }}>
      <h2>Nested Delegation Example</h2>
      <p>Clicking the parent div will log "Parent div clicked!".</p>
      <button onClick={handleChildClick}>Click Child (Stops Propagation)</button>
      <br /><br />
      <a href="https://www.google.com" target="_blank" onClick={handleLinkClick}>Click Link (Prevents Default)</a>
    </div>
  );
}
export default NestedDelegation
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NestedDelegation />);