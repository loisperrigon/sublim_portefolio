import React from 'react'
import SideBarLeft from './SideBarLeft'
import New from './New'
import Cryptos from './Cryptos'

import "../scss/dashboard.scss";



const Dashboard = () => (
    <section id="dashboard">
        <SideBarLeft />
        <New />
        <Cryptos />

    </section>

)

export default Dashboard