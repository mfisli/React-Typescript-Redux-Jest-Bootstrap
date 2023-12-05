import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={`/`}>
                    <img
                        src="https://www.footshop.eu/blog/wp-content/uploads/2021/02/1244398.jpg"
                        alt=""
                        height="50rem"
                    />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="pe-2" to={`/`}>
                            Home
                        </Link>
                        <Link className="pe-2" to={`items`}>
                            Shop
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
