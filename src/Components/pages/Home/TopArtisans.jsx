import { useMemo } from 'react';
import ArtisansCards from '../../ArtisansCards/ArtisansCards';

function TopArtisans({ artisans, loading }) {

  // Memoiser le calcul pour éviter de recalculer à chaque rendu
  // tant que `artisans` ne change pas.
  const topArtisans = useMemo(() => {

    // Sécurité : si aucune donnée, on retourne un tableau vide.
    if (!artisans || artisans.length === 0) return [];

    // Trier par note décroissante, puis prendre les 3 premiers.
    const sorted = [...artisans];
    sorted.sort((a, b) => b.note - a.note);
    return sorted.slice(0, 3);
  }, [artisans]);

  // Affichage UI pendant le chargement des données.
  if (loading) {
    return <p>Chargement des artisans...</p>;
  }

  // Afficher les cartes pour le top 3 du mois.
  return (
    <div>
      <div className='ligne border-bottom border-success border-3 my-3'></div>
      <h1>Les trois artisans du mois :</h1>
      <ArtisansCards artisans={topArtisans} />
    </div>
  )
}

export default TopArtisans;
