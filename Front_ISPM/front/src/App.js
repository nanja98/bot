import { React, Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import Chek from './Components/Chek.js';
import Tchat from './Components/Tchat.js';
import Utilisateur from './Components/Utilisateur.js';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return ( <
        BrowserRouter >
        <
        Navbar / >
        <
        Route exact path = "/tchat"
        Component = { Tchat }
        /> <
        Route path = "/check"
        Component = { Chek }
        /> <
        Route strict path = "/utilisateur"
        Component = { Utilisateur }
        /> <
        /BrowserRouter>

    );
}

export default App;