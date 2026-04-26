
import Step from '../../steps/Step';
import useArtisans from '../../../hooks/useArtisans';
import TopArtisans from './TopArtisans';

function Home() {

  const { artisans, loading, error} = useArtisans();
  // Gestion du chargement
  if (loading) {
    return <p>Chargement des artisans...</p>
  }
  // Gestion des erreurs
  if (error) {
    return <p>Erreur : {error}</p>
  }

  return (
    <div className="home-page">
      {/* section étapes */}
      <section>
        <Step />
      </section>
      {/* section les artisans du mois */}
      <section className='Top-artisans'>
        <TopArtisans artisans={artisans} loading={loading} />
      </section>
    </div>
  );
}

export default Home;