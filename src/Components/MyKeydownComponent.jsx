import React, { useState } from "react";
import "../App.css";

export default function MyKeyboardComponent() {
  const [key, setKey] = useState("");

  const handleKeyDown = (event) => {
    setKey(event.key);
  };

  return (
    <div className="Keyboard">
      <h1>GeeksforGeeks</h1>
      {key && <h2>Pressed Key: {key}</h2>}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press here..."
      />
    </div>
  );
}
