import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;


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
    .then((data) => setResponse(data.message));
  
};
console.log(response);
//TODO  implement this functionality 
  const handleVoiceToText = (voice) => {}

//! button submit on form takes value and store in message(query). in the body of the post request we put the message, and when we get the data back we set it as the response.
return (
  <div className="App">
    <h1>ELC App</h1>
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" >Submit</button>
      <button type="button" onClick={handleVoiceToText}>Microphone</button>
    </form>
    <div className="response">
      <h3>Response:</h3>
      <h4>{response}</h4>
     
    </div>
  </div>