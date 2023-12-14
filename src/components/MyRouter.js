import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import Unauthorized from './Unauthorized';  // Correction ici
import TopNav from './TopNav'
import Footer from './Footer'

class MyRouter extends Component {
    render() {
        const typeCompte = "utilisateur";

        return (
            <Router>
                <TopNav />
                <Routes>
                    <Route path="/" element={<Dashboard />} />

                    {typeCompte === "utilisateur" ? (
                        // L'utilisateur a le type de compte "employee", afficher les routes normales
                        <>
                            <Route path="/login" element={<Login />} />
                        </>
                    ) : (
                        <Route path="/unauthorized" element={<Unauthorized />} />
                    )}
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default MyRouter;
