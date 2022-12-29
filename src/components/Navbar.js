import React, { Component } from 'react';
import logo from "../images/logo.svg";
import {FaBeer} from "react-icons/fa";
import {Link} from "react-router-dom"



export default class Navbar extends Component {
  state={
    isOpen:false
  }
  
  // si te acercas a la barra cambias el state a "no falso que esta abierto"
  handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">


        </div>
        </div>
      </nav>
    )
  }
}
