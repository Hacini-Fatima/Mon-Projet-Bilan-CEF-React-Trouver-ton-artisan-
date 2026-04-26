import { Container , Row , Col , Nav} from "react-bootstrap";
import Logo from '../../img/logo.png';
import "./footer.scss";

export default function Footer() {

    // Icône téléphone (Bootstrap Icons)
    const icon = <i className="bi bi-telephone"></i>;

    // Adresse postale (stockée dans une variable JSX)
    const location = <p>101 cours Chalemangne CS 20033<br />69269 LYON CEDEX 02<br />FRANCE</p>;

    // Tableau des liens pour la partie mentions légales
    const PagesMentions = [ 
        { id : 1, name: "Mention légales" },
        { id : 2, name: "Données personnelles" },
        { id : 3, name: "Accessibilité" },
        { id : 4, name: "Presse" },         
        { id : 5, name: "Politiques des cookies" },         
        { id : 6, name: "Venir à la région" },         
    ]

    return (
        <footer className="App-footer">
            <Container>
                {/* Première ligne : logo + contact */}
                <Row>
                    {/* Colonne gauche : logo */}
                    <Col sm={12} md={6} className="div-logo">
                        <div className="footer-logo">
                            <img src={Logo} alt="Logo de la région - Retour à l'accueil" className='logo'/>
                        </div>
                    </Col>
                    {/* Colonne droite : titre + contact */}
                    <Col sm={12} md={6}>
                        <h1>Lyon</h1>
                        <div className="contact">
                            {location}
                            <p>{icon} 0660066066</p>
                        </div>
                    </Col>
                    
                </Row>
                 {/* Deuxième ligne : séparateur + liens mentions */}
                <Row>
                    <hr className="border-1 opacity-100"/>
                    <Col sm={12} md={12} className="autres-infos">
                        <div className="c-footer__bottom">
                            <div className="c-footer__services">
                                <div className="c-navigation">
                                    <Nav defaultActiveKey="/home" as="ul" className="ul-pages">
                                        {PagesMentions.map((item) => (
                                            <Nav.Item as="li" key={item.id}>
                                                <Nav.Link href="/home" className="pages-mention">{item.name}</Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};