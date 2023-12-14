import React from 'react';
import "../scss/profil.scss";
import profileImage from "../asset/image/imageProfil.jpg";  // Importez l'image
import Balance from './Balance'

const Profil = () => (
    <div id="profil">
        <img src={profileImage} alt="Profile" /> {/* Utilisez l'image importée */}
        <div>
            <h2>User ID</h2>
            <p>345677</p>
        </div>
        <Balance />
    </div>
);

export default Profil;
