import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
        console.log(data.message);
      });
  };

  //TODO implement this functionality 
  const handleVoiceToText = (voice) => {}

  return (
    <div className="App">
      <h1>Henry the 8th Chat Bot</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleVoiceToText}>Microphone</button>
      </form>
      <div className="response">
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
