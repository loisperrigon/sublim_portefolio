import React from 'react'
import Nft from './Nft'
import "../scss/nfts.scss";

const name = 'Prometheuse';

const value = '4566$';
const pourcentageJour = '5%';
const pourcentageSemaine = '30%';
const pourcentageMois = '30%';
const pourcentageAnnee = '10%';

const Nfts = () => (
    <section className="categories" id="nfts">
        <h2>NFT</h2>
        <div class="donneeColonne">
            < h3></ h3>
            < h3>Value</ h3>
            < h3>Day</ h3>
            < h3>Weekly</ h3>
            < h3>Month</ h3>
            < h3>Year</ h3></div>
        <Nft
            name={name}
            value={value}
            pourcentageJour={pourcentageJour}
            pourcentageSemaine={pourcentageSemaine}
            pourcentageMois={pourcentageMois}
            pourcentageAnnee={pourcentageAnnee}
        />
    </section >

)

export default Nfts