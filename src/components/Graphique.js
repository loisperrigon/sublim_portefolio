import React from 'react'


import "../scss/graphique.scss";
import profileImage from "../asset/image/imageProfil.jpg";  // Importez l'image

const Graphique = () => (
    <section className="categories" id="graphique">
        <h2>Graphique</h2>
        <img src={profileImage} alt="Profile" /> {/* Utilisez l'image importée */}
    </section>
)

export default Graphique