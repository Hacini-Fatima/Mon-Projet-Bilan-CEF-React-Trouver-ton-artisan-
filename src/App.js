import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Batiment from './Components/pages/Batiment';
import Services from './Components/pages/Services';
import Fabrication from './Components/pages/Fabrication';
import Alimentation from './Components/pages/Alimentation';
import Home from './Components/pages/Home/Home';
import SearchResults from './Components/SearchResults';
import useSearch from './hooks/useSearch';
import useArtisans from './hooks/useArtisans';
import FicheArtisans from './Components/FicheArtisan/FicheArtisans';
import NotFound from './Components/NotFound';
import "./style.scss";

function App() {
    // Récupération de tous les artisans et état de chargement
    const { artisans, loading } = useArtisans();
    // Configuration de la recherche (filtrage, terme, résultats)
    const { searchTerm, searchResults, isSearching, handleSearch } = useSearch(artisans);
    // Pendant le chargement des données, on affiche un écran de chargement
    if (loading) {
        return <p>Chargement de l'application...</p>;
    }

    return (
        <div className="App container">
            <header className="App-header">
                <Header 
                onSearch={handleSearch} // Fonction pour rechercher
                searchTerm={searchTerm} // Texte tapé par l'utilisateur
                />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/batiment" element={<Batiment />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/fabrication' element={<Fabrication />} />
                    <Route path='/alimentation' element={<Alimentation />} />
                    <Route path='/recherche' element={<SearchResults
                        searchTerm={searchTerm} // Terme recherché
                        results={searchResults} // Résultats filtrés
                        isSearching={isSearching} // Indique si recherche active
                        />} />
                    <Route path='/ficheArtisans/:id' 
                    element={<FicheArtisans artisans={artisans} // Tous les artisans passés en props
                    />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;