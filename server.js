// importer les librairies
const express = require('express'); // Framework pour créer le serveur web.
const nodemailer = require('nodemailer'); // Librairie pour envoyer des mails.
const cors = require('cors'); // Permet les requetes depuis ton site React.

// créer les serveur : créer une instance du serveur Express.
const app = express();

// Configurer le serveur
app.use(cors()); // Autorise React (localhost:3000) à parler au backend (localhost:3001).
app.use(express.json()); // Permet de recevoir des données au format JSON.

// Connexion à MailDev (serveur email local)
const transporter = nodemailer.createTransport({
  host: 'localhost', // maildev tourne sur notre ordinateur.
  port: 1025  // Port spécial de MailDev pour recevoir les E-mails
});

// Route (URL) qui reçoit les emails du formulaire
app.post('/send-email', (req, res) => {  // req = requete envoyée par React, res = réponse qu'on va envoyer à React.
  
  // Récupérer les données envoyées par le formulaire.
  const { to, from, subject, message } = req.body;
  
  // Envoyer l'email via MailDev
  transporter.sendMail({ 
    from: from, // Email de l'expéditeur (la personne qui remplit le formulaire)
    to: to, // Email du destinataire (l'artisan)
    subject: subject, // Objet du message
    text: `De: ${from}\n\n${message}` }) // Corps du message en texte

    // Si ça marche : répondre "success: true"
    .then(() => res.json({ success: true }))
    // Si ça échoue : répondre avec l'erreur
    .catch(error => res.status(500).json({ error: error.message }));
});
//  DÉMARRER LE SERVEUR SUR LE PORT 3001
app.listen(3001, () => console.log('Serveur sur http://localhost:3001'));