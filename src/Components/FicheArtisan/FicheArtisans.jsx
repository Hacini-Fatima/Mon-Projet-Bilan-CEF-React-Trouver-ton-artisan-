import { useParams, Link } from 'react-router-dom';
import useFicheArtisans from '../../hooks/useFicheArtisans';
import FormContact from '../FormContact';
import { Row , Col } from 'react-bootstrap';
import artisanImg from '../../img/artisans.jpg';
import './ficheArtisans.scss';

export default function FicheArtisans() {

  // Récupère l'ID depuis l'URL
  const { id } = useParams();

  // Hook custom : retourne l'artisan et l'état de chargement
  const { artisan, loading, error } = useFicheArtisans(id);

  // chargement en cours
  if (loading) {
    return <p>Chargement de la fiche artisan...</p>;
  }

  // Gestion de l'erreur
  if (error) {
    return <p className="error-message">Erreur : {error}</p>;
  }

  // Gestion du cas où artisan est null
  if (!artisan) {
    return <p>Aucun artisan trouvé pour cet ID.</p>;
  }


  return (
    <div className="fiche-artisan">
      <Row>
        <Col xs={12} md={6}>
          <Link to="/" className="btn btn-secondary mt-3">
            Retour à l'accueil
          </Link>
          {/* Section informations artisan */}
          <section className='artisan-infos'>
            <h1>{artisan.name}</h1>
            <p>Note : {artisan.note}/5</p>
            <p>Spécialité : {artisan.specialty}</p>
            <p>Localisation : {artisan.location}</p>
            <p>Description : {artisan.about ?? 'Aucune description disponible.'}</p>
            <p>Le site web : <a href='/notfound'>{artisan.website}</a></p>
          </section>
          {/* Section formulaire de contact */}
          <section className='artisan-form'>
            <FormContact />
          </section>
        </Col>
        <Col xs={12} md={6} className='img-fiche'>
          <img src={artisanImg} alt="img" className='artisan-img'/>
        </Col>
      </Row>
    </div>
  );
}