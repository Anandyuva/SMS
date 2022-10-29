import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <>
        <nav className="myNav">
            <Link to="/Home"><h3>Home</h3></Link>
            <Link to="/Salary"><h3>Salary</h3></Link>
            <Link to="/Emi"><h3>EMI</h3></Link>
            <Link to="/Expenses"><h3>Expenses</h3></Link>
        </nav>
        </>
    );
}

export default Header;