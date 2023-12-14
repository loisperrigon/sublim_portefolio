import React from 'react';
import Crypto from './Crypto';
import '../scss/cryptos.scss';

const name = 'ETH';
const quantite = '32';
const value = '4566$';
const pourcentageJour = '5%';
const pourcentageSemaine = '30%';
const pourcentageMois = '30%';
const pourcentageAnnee = '10%';

const Cryptos = () => (
    <section id="cryptos">
        <h2>All Crypto</h2>
        <div class="donneeColonne">
            < h4></ h4>
            < h4>Quantité</ h4>
            < h4>Valeur</ h4>
            < h4>Day</ h4>
            < h4>Weekly</ h4>
            < h4>Month</ h4>
            < h4>Year</ h4></div>
        <Crypto
            name={name}
            quantite={quantite}
            value={value}
            pourcentageJour={pourcentageJour}
            pourcentageSemaine={pourcentageSemaine}
            pourcentageMois={pourcentageMois}
            pourcentageAnnee={pourcentageAnnee}
        />
    </section>
);

export default Cryptos;
