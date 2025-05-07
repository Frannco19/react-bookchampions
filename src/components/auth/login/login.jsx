import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useRef, useState } from "react";
/*
Responsabilidad: formulario de autenticación.
Actualmente es estático. No tiene ningún estado ni lógica de autenticación. Sirve solo como UI.
Para hacerlo funcional:
Necesitarías usar useState para email y contraseña.
Verificar las credenciales.
Controlar el acceso a App.jsx con un isLoggedIn.
*/
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            email: false,
        }))

    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            password: false,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            alert("Debe ingresar un email.");
            emailRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                email: true,
            }))
            return;
        }

        if (!password) {
            alert("Debe ingresar un password.");
            passwordRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true,
            }))
            return;
        }

        alert(`Inicio de sesión correcto para email: ${email} `)
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            className={errors.email ? "border border-danger" : ""}
                            type="text"
                            placeholder="Ingresar email"
                            onChange={handleChangeEmail}
                            value={email}
                            ref={emailRef}
                        />
                        {errors.email &&
                            <p className="text-danger mt-2">Debe completar el campo email</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            className={errors.password && "border border-danger"}
                            type="password"
                            placeholder="Ingresar contraseña"
                            onChange={handleChangePassword}
                            value={password}
                            ref={passwordRef}
                        />
                        {errors.password &&
                            <p className="text-danger mt-2">Debe completar el campo password</p>}
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;