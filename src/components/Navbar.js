import React, { Component } from 'react';
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom"



export default class Navbar extends Component {
  state={
    isOpen:false
  }
  
  // si te acercas a la barra cambias el state a "no es falso que está abierto"
  handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/">                    
                    <img src={logo} alt="Costanilla Rural" />
                </Link>
                <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon" />
                </button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav":"nav-links"}>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/rooms">Alojamientos</Link>
                </li>
            </ul>
        </div>
      </nav>
    )
  }
}
