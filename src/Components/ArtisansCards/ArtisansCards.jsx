
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./ArtisansCards.scss";


function ArtisansCards({ artisans }) {

  // Afficher un message si y'a aucun artisan 
  if (!artisans || artisans.length === 0) {
    return <p>Aucun artisan à afficher</p>;
  }

  return (
    <div className='Container g-4 p-4 mb-5'>
      <Row xs={1} md={2} lg={3} className="g-4 p-4 mb-5">
        {artisans.map((artisan) => (
          <Col key={artisan.id}>
            <Card className="Cards text-center">
              <Card.Body>
                <Card.Title>{artisan.name}</Card.Title>
                <Card.Text>{artisan.note}/5</Card.Text>
                <Card.Text>
                  {artisan.specialty} - {artisan.location}
                </Card.Text>
                <Link to={`/ficheArtisans/${artisan.id}`} className="btn">
                  Afficher
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ArtisansCards;