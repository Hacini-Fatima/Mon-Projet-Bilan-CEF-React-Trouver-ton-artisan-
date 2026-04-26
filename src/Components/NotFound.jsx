
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Error from '../img/404-error.jpg';
import { useEffect } from 'react';

function NotFound() {

    // Change le titre de l'onglet quand la page 404 est affichée
    useEffect(() => {
        document.title = "404 - Page non trouvée"
    }, []);  // Tableau de dépendances vide = exécuté une seule fois

    return (
        <Container className="text-center py-5" role="main">
            <h1 tabIndex="-1">Page non trouvée</h1>
            <img src={Error} alt="404 - Page non trouvée" className="img-fluid my-4"/>
            <p className="lead">Désolé, impossible de trouver cette page.</p>
            <Button as={Link} to="/" variant="primary" aria-label="Retour à l'accueil">
                Retour à l'accueil
            </Button>
        </Container>
    );
}

export default NotFound;