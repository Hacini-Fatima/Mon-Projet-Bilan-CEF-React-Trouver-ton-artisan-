import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import SearchBar from '../SearchBar';
import "./Header.scss";

function Header({ onSearch, searchTerm }) {

    // Tableau des catégories pour la navigation
    const PagesParCatégories = [
        { id : 1, name : "batiment", to:"/batiment"},
        { id : 2, name : "services" , to: "/services"},
        { id : 3, name : "fabrication", to: "/fabrication"},
        { id : 4, name : "alimentation", to: "/alimentation"},
    ]

    return (
        <div className="App-header">
            <Navbar expand="lg" className="px-5" aria-label="Navigation principale" collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/" aria-label="Accueil - Retour à la page d'accueil">
                        <img src={Logo} alt="Logo de la région - Retour à l'accueil" className='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" aria-label="Menu de navigation"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto text-uppercase"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                            role="navigation"
                            aria-label="Menu principal"
                        >
                            {PagesParCatégories.map((page) => (
                            <Nav.Link 
                                key={page.id} 
                                as={Link} 
                                to={page.to}
                            >
                                {page.name}
                            </Nav.Link>
                            ))}
                            </Nav>
                        
                        
                        <SearchBar 
                            searchTerm={searchTerm} 
                            onSearch={onSearch}
                            placeholder="Rechercher par nom, ville ou spécialité..."
                            aria-label="Rechercher des bâtiments, services ou fabricants"
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;