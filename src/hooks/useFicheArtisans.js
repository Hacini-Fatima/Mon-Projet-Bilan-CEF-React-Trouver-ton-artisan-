// Hooks React : état et cycle de vie
import { useState, useEffect } from 'react';

// Données des artisans (fichier local)
import artisansData from '../data/datas.json';

// Hook personnalisé : récupère un artisan par son id
export default function useFicheArtisans(id) {
  
  // Stocke l'artisan trouvé (ou null)
  const [artisan, setArtisan] = useState(null);
  
  // Indique si le chargement est en cours
  const [loading, setLoading] = useState(true);
  
  // Stocke le message d'erreur (ou null)
  const [error, setError] = useState(null);

  // Se relance quand l'id change
  useEffect(() => {
    try {
      // Recherche de l'artisan par son id
      const found = artisansData.find((item) => String(item.id) === String(id));
      
      // Si non trouvé, on déclenche une erreur
      if (!found) {
        throw new Error("Artisan non trouvé");
      }
      
      // Succès : on enregistre l'artisan
      setArtisan(found);
      setError(null); // Efface l'erreur précédente
      
    } catch (err) {
      // Échec : on enregistre l'erreur
      setError(err.message);
      setArtisan(null); // Efface l'artisan précédent
      
    } finally {
      // Toujours exécuté à la fin (succès ou échec)
      setLoading(false);
    }
  }, [id]); // Dépendance : se relance si l'id change

  // Retourne les données au composant qui utilise ce hook
  return { artisan, loading, error };
}