import React from 'react';
import '../scss/crypto.scss';

const Crypto = ({ name, quantite, value, pourcentageJour, pourcentageSemaine, pourcentageMois, pourcentageAnnee }) => (
    <section className="cyptoInfo">
        <h3>{name}</h3>
        <p>{quantite}</p>
        <p>{value}</p>
        <p>{pourcentageJour}</p>
        <p>{pourcentageSemaine}</p>
        <p>{pourcentageMois}</p>
        <p>{pourcentageAnnee}</p>
    </section >
);

export default Crypto;
