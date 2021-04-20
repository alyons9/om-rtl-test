import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function AppWithAxios() {

  const [books, setBooks] = useState(['1', '2', '3']);
  const [updating, setUpdating] = useState(true);

  useEffect(()=>{
    // axios.get('http://philosophy-quotes-api.glitch.me/quotes')
    axios.get('https://loacalhost/books')
    .then(res => {
      const result = res.data;
      console.log(result);
      const quotes = result.map((book)=> book.quote);
      console.log(quotes);
      setBooks(quotes)
    })
  }, [updating])

const addBook = () => {
  setBooks(books => [...books, "5"]);
}

const items = books.map(function(name, index){
  return <li key={ index }>{name}</li>;
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

export default AppWithAxios;
