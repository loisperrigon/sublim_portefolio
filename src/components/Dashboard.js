import React from 'react'
import SideBarLeft from './SideBarLeft'
import New from './New'
import Cryptos from './Cryptos'
import Nfts from './Nfts'
import Graphique from './Graphique'

import { GetERC20Balances } from '../app/GetERC20Balances';



import "../scss/dashboard.scss";

// Appeler la fonction pour obtenir le solde Ethereum (ETH)
GetERC20Balances('0x65e67B5835E1A6d700fec8562a3fc95Bf07E931E');


const Dashboard = () => (
    <section id="dashboard">
        <SideBarLeft />
        <New />
        <Cryptos />
        <Nfts />
        <Graphique />
    </section>

)

export default Dashboard