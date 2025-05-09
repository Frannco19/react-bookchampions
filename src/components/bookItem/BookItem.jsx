import { Badge, Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons"

import './bookItem.css';

const BookItem = ({
    title,
    author,
    rating,
    pageCount,
    imageUrl,
    available = false,
    onBookSelected,
    onDelete
}) => {
    // Lógica de visualización:
    //Usa estrellas llenas y vacías según rating.
    //Usa Badge para mostrar si está disponible.
    //Al hacer clic en el botón "Seleccionar libro", ejecuta onBookSelected(title) que modifica selectedBook en Books.
    //Este patrón se llama “lifting state up”: el estado se mantiene en el componente padre (Books), y el hijo solo lo notifica mediante una prop callback.

    const handleSelectBook = () => {
        onBookSelected(title);
    }

    const handleDeleteBook = () => {
        onDelete(id, title)
    }

    const filledStars = Array.from({ length: Math.min(rating, 5) }, (_, i) =>
        (<StarFill key={`filled-${i}`} color="#FFC107" />));

    const emptyStars = Array.from({ length: 5 - Math.min(rating, 5) }, (_, i) =>
        (<Star key={`empty-${i}`} color="#FFC107" />));


    return (
        <Card className="book-container mx-3 mb-2">
            <Card.Img
                height={400}
                src={imageUrl}
                variant="top"
            />
            <Card.Body>
                <div className="mb-2">
                    {available ?
                        <Badge bg="success">Disponible</Badge>
                        : <Badge bg="danger">Reservado</Badge>
                    }
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <p>{rating} estrella{rating > 1 ? 's' : ''}</p>
                <div className="rating-stars">
                    {filledStars}
                    {emptyStars}
                </div>
                <p>{pageCount} páginas</p>
                <p>{available ? "Disponible" : "No disponible"}</p>
                <Button variant="danger" className="me-2" onClick={handleDeleteBook}>Eliminar libro</Button>
                <Button onClick={handleSelectBook}>Seleccionar libro</Button>
            </Card.Body>
        </Card>
    )
}

export default BookItem;