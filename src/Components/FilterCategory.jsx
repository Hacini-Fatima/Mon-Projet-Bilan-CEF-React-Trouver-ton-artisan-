import useArtisans from "../hooks/useArtisans";
import ArtisansCards from "./ArtisansCards/ArtisansCards";

function FilterCategory({category}) { // {category} est une prop qui contient la catégorie à filtrer

    // Récupère les données depuis le hook useArtisans
    const { artisans, loading, error } = useArtisans();

    // Affiche un message de chargement pendant que les données sont en cours de récupération
    if (loading) {
        return <p>Loading...</p>;
    }
    // Gestion de l'erreur
     if (error) {
        return <p>Erreur : {error}</p>;
    }

    // Filtre les artisans en fonction de la catégorie reçue en prop
    const filteredArtisans = artisans.filter(artisan => artisan.category === category);
   
    return <ArtisansCards artisans={filteredArtisans} />;
    
}

export default FilterCategory;