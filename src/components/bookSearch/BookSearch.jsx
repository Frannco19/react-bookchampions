import { Form } from "react-bootstrap"
 
const BookSearch = ({ onSearch, search }) => {
    // Responsabilidad: input controlado para buscar libros.

    const handleSearch = (event) => {
        onSearch(event.target.value);
    }
    //Simplemente actualiza el search en Books.jsx a medida que se escribe en el input.
    return (
        <Form.Group className="mb-3" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libro..."
                onChange={handleSearch}
                value={search} />
        </Form.Group>
    )
}

export default BookSearch;