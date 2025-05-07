import React from 'react'

const ModalAlert = () => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Aviso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>¿Estas seguro que deseas eliminar el libro?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary">Si, deseo eliminarlo</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ModalAlert