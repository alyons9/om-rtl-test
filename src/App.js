import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { axios } from 'axios';

function App() {

  const [books, setBooks] = useState(['Harry potter', 'Tom Clancy: Black', 'The Witcher']);

  const addBook = () => {
    setBooks(books => [...books, "Think and Grow"]);
  }

  const items = books.map(function (name, index) {
    return <li key={index}>{name}</li>;
  });

  return (
    <div className="App">
      <h1>Testing Done Right</h1>
      <ul aria-label="books">
        {items}
      </ul>
      <button onClick={addBook}>Add</button>
    </div>
  );
}

export default App;
