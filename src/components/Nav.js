import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import '../App.css';

 const Nav = () => {
     return (
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/booking">Reservations</NavLink>
            <NavLink to="/orderOnline">Order Online</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
     )
 }
  export default Nav;