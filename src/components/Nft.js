import React from 'react'

import "../scss/nft.scss";



const Nft = ({ name, value, pourcentageJour, pourcentageSemaine, pourcentageMois, pourcentageAnnee }) => (
    <div className="nft">
        <h4>{name}</h4>
        <p>{value}</p>
        <p>{pourcentageJour}</p>
        <p>{pourcentageSemaine}</p>
        <p>{pourcentageMois}</p>
        <p>{pourcentageAnnee}</p>
    </div>

)

export default Nft