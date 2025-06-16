import { useState, useEffect } from "react";

import { books as BOOK_DATA } from "../../data/books"

import Books from "../books/Books"
import NewBook from "../newBook/NewBook"
import { Button, Col, Row } from "react-bootstrap";

const Dashboard = ({ onLogout }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
    console.log("Dashboard")

    fetch("http://localhost:8081/books")
        .then(res => res.json())
        .then(data => {
          setBooks(data.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author.name,
            pageCount: 100,
            rating: 5,
            imageUrl: null,
            available: true
          })))
        })
        .catch(err => console.log(err))
  }, [])
  

   const handleAddBook = (newBook) => {
     const newBookWithId = {
       id: books[books.length - 1].id + 1,
       ...newBook,
     };
     fetch("http://localhost:8081/books", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2MTFkNGU4MS0zZDBjLTRmODgtOTcxZS0yYThjYjAwNGEwM2UifQ.eyJleHAiOjE3NTAwNDU4MzksImlhdCI6MTc1MDA0NDAzOSwianRpIjoiZDJjNjIzY2ItMWU4OC00YzYxLThlNDktZGU4OTlmMTUwMTdiIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwic3ViIjoiNGNjOGU3ZGMtNWQ5Mi00YTYwLThhMjAtNTRmYzYxNzJiYzUxIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6InJlYWxtdGVzdCIsInNlc3Npb25fc3RhdGUiOiJiNjA4YTg2OC03YzY5LTQwNjktYWUzNS0yYmMxYjgzYzhjZTYiLCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJiNjA4YTg2OC03YzY5LTQwNjktYWUzNS0yYmMxYjgzYzhjZTYifQ.puKT7CK0NKdIsgvdHLtbJrJe6Y2sPXpY53baT7j8-HE`
      },
      method: "POST",
      body: JSON.stringify({
        title: newBook.title
      })
     })
     .then(res => res.json())
     .then(() => {
      setBooks(prevBooks => [newBookWithId, ...prevBooks])
     })
     .catch(err => console.log(err))
    }

    const handleDeleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id))
    }

    return (
        <>
            <Row className="w-100">
                <Col />
                <Col md={3} className="d-flex justify-content-end m-3">
                    <Button onClick={onLogout}>Cerrar sesión</Button>
                </Col>
            </Row>
            <h1>Book Champions</h1>
            <p>¡Bienvenidos a book champions!</p>
            <NewBook onBookAdded={handleAddBook} />
            <Books books={books} onDeleteBook={handleDeleteBook} />
        </>
    )
}

export default Dashboard