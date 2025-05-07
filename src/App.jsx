import { useState } from "react"
import { books as BOOK_DATA } from "./data/books"
import Books from "./components/books/Books"
import NewBook from "./components/newBook/NewBook"
import Login from "./components/auth/login/Login"

// App.jsx es el contenedor principal del estado.
const App = () => {
  // BOOK_DATA es una constante que actúa como fuente inicial (simulando una "base de datos").
  const [books, setBooks] = useState(BOOK_DATA);

  const handleAddBook = (newBook) => {

    const newBookWithId = {
      id: books[books.length - 1].id + 1,
      ...newBook,
    };
    setBooks(prevBooks => [newBookWithId, ...prevBooks])
  }
  //Em la etiqueta verde pasa los books al componente Books y la función handleAddBook al componente NewBook
  return (
    <div className="d-flex flex-column align-items-center ">
      <h1>Book Champions</h1>
      <p>¡Bienvenidos a book champions!</p>
      <NewBook onBookAdded={handleAddBook} />
      <Books books={books} />
      <Login /> 
    </div>
  )
}

export default App
