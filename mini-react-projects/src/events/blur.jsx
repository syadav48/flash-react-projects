// - Form Validation: Trigger validation when a user leaves an input field.
// - Auto-Saving Data: Save user input when they move to another field.
// - Hiding UI Elements: Close dropdowns or tooltips when focus is lost.
// - Logging User Actions: Track when users interact with form fields


import { useState } from "react";

const BlurExample = () => {
  const [message, setMessage] = useState("");

  const handleBlur = () => {
    setMessage("Input field lost focus!");
  };

  return (
    <div style={{margin: '20px'}}> 
      <input type="text" onBlur={handleBlur} placeholder="Type something..." />
      <p>{message}</p>
    </div>
  );
};

export default BlurExample;