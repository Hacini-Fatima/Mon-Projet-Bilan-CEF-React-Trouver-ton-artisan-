import { useState , useEffect } from "react";
import artisansData from '../data/datas.json';

export default function useArtisans() {

    // State pour stocker les artisans
    const [artisans , setArtisans] = useState([]);

    // State pour gérer le chargement des données
    const [loading , setLoading] = useState(true);

    // State pour gérer les erreurs
    const [error, setError] = useState(null);

    useEffect(() => {
            // Vérification que les données existent
            if (!artisansData || !Array.isArray(artisansData)) {
                setError("Impossible de charger la liste des artisans");
                setArtisans([]);
                setLoading(false);
                return;
            }
            //récupération des données avec Succès
            setArtisans(artisansData); // On sauvegarde les données
            setError(null); // On efface toute erreur précédente
            setLoading(false); // Chargement

    }, []);

    return { 
        artisans, // Les données des artisans
        loading, // L'état de chargement
        error // gestion des erreurs
    };
}