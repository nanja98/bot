import React from "react";
import { Link } from "react-router-dom";
import "../Styles/main.css"

function Navbar() {

    return <div >
        <
        div className = "headers" >
        <
        h3 >
        <
        img src = "../Image/sar.jpg"
    alt = "test" / >
        <
        /h3> <
        hr / >
        <
        nav >
        <
        ul >
        <
        Link style = {
            { padding: '20px' } }
    to = "/tchat" > Tchat bot < /Link> <
        Link style = {
            { padding: '20px' } }
    to = "/check" > Chek - in < /Link> <
        Link style = {
            { padding: '20px' } }
    to = "/utilisateur" > Utilisateur < /Link> <
        hr / >
        <
        li > Log out < /li> <
        /ul> <
        /nav> <
        /div>


    <
    /div>

}
export default Navbar;