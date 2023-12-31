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
    <section className="categories" id="cryptos">
        <h2>All Crypto</h2>
        <div class="donneesColonne">
            < h3></ h3>
            < h3>Quantité</ h3>
            < h3>Valeur</ h3>
            < h3>Day</ h3>
            < h3>Weekly</ h3>
            < h3>Month</ h3>
            < h3>Year</ h3>
        </div>
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
