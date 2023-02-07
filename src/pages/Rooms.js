import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'


const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Alojamientos">
        <Link to="/" className="btn-primary">
          Ir al inicio
        </Link>
      </Banner>
    </Hero>
  )
}

export default Rooms
