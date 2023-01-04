import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'



export default function ErrorPage() {
  return (
    <Hero>
      <Banner title="404" subtitle="Página no encontrada">
        <Link to="/" className="btn-primary">Volver</Link>
        
      </Banner>
    </Hero>
  )
}
