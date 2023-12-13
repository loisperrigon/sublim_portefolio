import React from 'react'
import Profil from './Profil'
import Balance from './Balance'
import NavigationNFTCrypto from './NavigationNFTCrypto'
import Graphique from './Graphique'
import Item from './Item'


const Dashboard = () => (
    <section id="dashboard">
        <Profil />
        <NavigationNFTCrypto />
        <Balance />
        <Graphique />
        <Item />
    </section>

)

export default Dashboard