import { useState, useMemo } from 'react';

export default function useSearch(artisans) {

  // Terme saisi par l'utilisateur dans la barre de recherche
  const [searchTerm, setSearchTerm] = useState('');
  
  // useMemo : recalcul uniquement si artisans OU searchTerm change
  const searchResults = useMemo(() => {

    // Pas d'artisans
    if (!artisans || !Array.isArray(artisans)) return [];
    
    // Recherche vide
    if (!searchTerm || searchTerm.trim() === '') return [];
    
    // Convertir en minuscule pour recherche insensible à la casse
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Filtrer sur name, specialty ou location
    return artisans.filter(artisan => 
      // chaining (?.) : évite erreur si la propriété n'existe pas
      artisan.name?.toLowerCase().includes(searchLower) ||
      artisan.specialty?.toLowerCase().includes(searchLower) ||
      artisan.location?.toLowerCase().includes(searchLower)
    );
  }, [artisans, searchTerm]);
  
  // Recherche active ?
  const isSearching = searchTerm.trim() !== '';
  
  // Met à jour le terme
  const handleSearch = (term) => setSearchTerm(term);
  
  // Vider la recherche
  const clearSearch = () => setSearchTerm('');
  
  return { 
    searchTerm, // Texte saisi
    searchResults, // Résultats filtrés
    isSearching, // État de recherche (actif ou non)
    handleSearch, // Fonction pour changer la recherche
    clearSearch // Fonction pour effacer
  };
}