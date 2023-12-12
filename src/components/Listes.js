
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom'


import Dashboard from './Dashboard';
import Login from './Login';



class Listes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <section>
                            <h1> react-starter </h1>
                            <h2> (React version 18.0.2) </h2>
                        </section>
                        <nav>
                            <ul>
                                <li><Link to="/">Dashboard</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <Routes>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/Login" component={Login} />
                        </Routes>
                    </main>
                </div>
            </Router >
        );
    }
}

export default Listes;