import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function FormContact() {

  const [success, setSuccess] = useState(false);

  const Formulaire = [
    { id :"email-input", label : "Email", name : "email", type : "email", autoComplete : "email" },
    { id : "objet-input", label : "Objet", name : "objet",  type : "text", autoComplete : "off" },
    { id : "message", label : "Message", name : "message", as : "textarea", autoComplete : "off" },
  ]


  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target; // Récupère le formulaire
    
    
    await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'artisan@test.com',
        from: f.email.value,
        subject: f.objet.value,
        message: f.message.value // correspond au name="message"
      })
    });
    
    // message de confirmation de l'envoie
    f.reset();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {success && 
      <p style={{ color: 'green' }}>
        Votre demande a bien été envoyée. L’artisan vous répond sous 48h.
      </p>
      }
      
      {Formulaire.map((champ) => (
        <Form.Group key={champ.id} className="mb-3">
          <Form.Label htmlFor={champ.id}>
            {champ.label}
          </Form.Label>
            
          {champ.as === 'textarea' ? (
            <Form.Control
              as={champ.as}
              id={champ.id}
              name={champ.name} 
              rows={3} 
              required
              autoComplete={champ.autoComplete} // indique au navigateur quel type de donnée pour chaque champ
            />
            ) : (
            <Form.Control 
              type={champ.type}
              id={champ.id} 
              name={champ.name} 
              required
              autoComplete={champ.autoComplete}
            />
          )}
        </Form.Group>
      ))}
      <Button type="submit">Envoyer</Button>
    </Form>
  );
}

export default FormContact;