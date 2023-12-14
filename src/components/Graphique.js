import React from 'react'
import "../scss/graphique.scss";
import profileImage from "../asset/image/imageProfil.jpg";  // Importez l'image

const Graphique = () => (
    <div id="graphique">
        <img src={profileImage} alt="Profile" /> {/* Utilisez l'image importée */}
    </div>
)

export default Graphique