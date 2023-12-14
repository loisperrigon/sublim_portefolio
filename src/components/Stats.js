import React from 'react'
import NavigationNFTCrypto from './NavigationNFTCrypto'
import Graphique from './Graphique'
import Item from './Item'
import NavbarStats from './NavbarStats'
import "../scss/stats.scss";

const Stats = () => (
    <section id="stats">
        <NavigationNFTCrypto />
        <Graphique />
        <NavbarStats />
        <Item />
    </section>

)

export default Stats