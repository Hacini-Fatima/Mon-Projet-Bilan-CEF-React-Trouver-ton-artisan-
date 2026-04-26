import { useLocation } from 'react-router-dom';
import ArtisansCards from './ArtisansCards/ArtisansCards';

function SearchResults({ results = [], searchTerm }) {

  // Récupère l'URL pour lire le paramètre
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get('q');
  
  // Si on a un searchTerm via props, on l'utilise, sinon on prend celui de l'URL
  const term = searchTerm || queryParam; // Priorité à l'URL
  
  // Si pas de terme de recherche, on affiche un message
  if (!term) {
    return <p>Commencez à taper votre recherche</p>;
  }
  // aucun résultat trouvé
  if (results.length === 0) {
    return (
      <div className="text-center p-4">
        <p>Aucun résultat trouvé pour "{term}"</p>
      </div>
    );
  }
  
  return (
    <div>
      <h4 className="mb-3">Résultats pour "{term}" : {results.length} artisan(s)</h4>
      <ArtisansCards artisans={results} />
    </div>
  );
}

export default SearchResults;