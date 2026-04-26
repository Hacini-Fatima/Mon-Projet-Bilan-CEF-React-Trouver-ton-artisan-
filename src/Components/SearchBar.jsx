import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ 
    searchTerm = '',
    onSearch = () => {},
    placeholder = "Rechercher..." 
}) {
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const value = e.target.value;
        onSearch(value); // Met à jour l'état
        
        // Redirige vers la page recherche si on tape quelque chose
        if (value.trim()) {
            navigate(`/recherche?q=${encodeURIComponent(value)}`);
        }
    }
   
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                id="search"
                placeholder={placeholder}
                className="me-2"
                value={searchTerm}
                onChange={handleChange}
            />
        </Form>
    );
}