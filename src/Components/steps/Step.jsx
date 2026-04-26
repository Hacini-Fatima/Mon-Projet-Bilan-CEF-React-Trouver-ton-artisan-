
import Accordion from 'react-bootstrap/Accordion';
import { Row , Col } from 'react-bootstrap';
import MonImage from '../../img/mon-image.png';
import './steps.scss';


function Step() {
  // Tableau des étapes
  const EtapesBase = [
    { id : "1", titre : "Choisir la catégorie d’artisanat dans le menu"},
    { id : "2", titre : "Choisir un artisan"},   
    { id : "3", titre : "Le contacter via le formulaire de contact."},  
    { id : "4", titre : "Une réponse sera apportée sous 48h"},

  ];
  // l'ajout un texte "detail" (lorem ipsum) à chaque étape
  const Etapes = EtapesBase.map(etape => ({
    ...etape, // Copie toutes les propriétés existantes (id, titre)
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}));

  return (
    <section className="App-step">
      <div className='ligne border-bottom border-danger border-3 my-3'></div>
      <h1>Comment trouver mon artisan ?</h1>
      <Row>
        <Col sm={12} md={6}>
        <img src={MonImage} alt="img" className='mon-img'/>
        </Col>
        <Col sm={12} md={6}>
          <Accordion defaultActiveKey="1">
            {Etapes.map(etape => (
              <Accordion.Item eventKey={etape.id} key={etape.id}>
                <Accordion.Header>{etape.titre}</Accordion.Header>
                <Accordion.Body>{etape.detail}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
      
    </section>
  );
}

export default Step;