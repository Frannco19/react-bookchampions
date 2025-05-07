import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";
import ModalAlert from "../modalAlert/ModalAlert";

const Books = ({ books }) => {
    // selectedBook: almacena el título del libro que fue seleccionado.
    //search: almacena el valor ingresado en el input de búsqueda.
    const [selectedBook, setSelectedBook] = useState('');
    const [search, setSearch] = useState('');
    const [, setDeleteBook] = useState('');

    const handleSelectBook = (title) => {
        setSelectedBook(title);
    }

    const handleSearchChange = (searchValue) => {
        setSearch(searchValue)
    }

    const handleDeletedBook = (onBookDeleted) => {
        setDeleteBook(onBookDeleted)
    } 
    // Se filtran los libros en base al título, usando el estado search.
    const booksMapped = books
        // filter(...)
        //Se aplica un filtro a la lista completa de libros (books).
        //Se convierte el título de cada libro a minúsculas (book.title.toLowerCase()).
        //Se compara si ese string incluye el texto ingresado por el usuario (search.toLowerCase()).
        //El resultado es una nueva lista de libros que coinciden con la búsqueda.
        .filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase()))
        .map(book => (
            // map(...)
            //A cada libro filtrado, se lo convierte en un componente visual: BookItem.
            //Se pasan las propiedades necesarias (title, author, rating, etc.) como props al componente BookItem.
            //Se agrega una key={book.id} para que React pueda identificar de forma única cada elemento (clave para optimizar el renderizado en listas).
            <BookItem
                key={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                pageCount={book.pageCount}
                imageUrl={book.imageUrl}
                available={book.available}
                onBookSelected={handleSelectBook}
                onBookDeleted={handleDeletedBook}
            />
        ))
    // <BookSearch />
    //Componente de input para buscar libros. Recibe dos props:
    //onSearch: función que actualiza el estado search.
    //search: valor actual del input.
    //{selectedBook && <p>...
    //Si hay un libro seleccionado (selectedBook no es ''), muestra un mensaje indicando cuál fue.
    //<div>...</div> Contenedor de los libros:
    //d-flex justify-content-center flex-wrap (clases Bootstrap): centra y distribuye los BookItem en filas.
    //Si booksMapped.length > 0, muestra la lista de libros.
    //Si no hay coincidencias (la búsqueda no da resultados), muestra un mensaje alternativo:
    //"No se encontraron libros".
    return (
        <>
            <BookSearch
                onSearch={handleSearchChange}
                search={search} />
            {selectedBook
                &&
                <p>Usted ha seleccionado el libro: <b>{selectedBook}</b></p>}
            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped.length ?
                    booksMapped :
                    <p>No se encontraron libros</p>}
            </div>

        
        </>
    )
};

export default Books;