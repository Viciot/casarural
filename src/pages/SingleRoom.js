import React, { useContext } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import {Link, useParams} from "react-router-dom";
import {RoomContext} from "../context";





export default function SingleRoom() {
  // Get the slug using React Router's useParams hook
  const {slug} = useParams();

  // Get the context we defined in context.js using React's useContext hook
  const context = useContext(RoomContext);

  // Similar to the tutorial, we access the getRoom function through our context (no need for 'this')
  const {getRoom} = context;

  // Get the room object that matches our slug like in the tutorial (no need to access state)
  const room = getRoom(slug);  

  //este trozo y el de arriba, los he sacado de un comentario del tutorial, en el inspector de codigo/components veo que los props vienen llenos de info
  if (!room){
    return <div className='error'>
      <h3>El alojamiento no existe</h3>
      <Link to='/rooms' className='btn-primary'>
        Volver atrás
      </Link>
    </div>
  }

  const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

  return (
    <Hero hero='roomsHero'>      
      <Banner title={`${name} room`}>
        <Link to="/rooms" className='btn-primary'>
          Volver a los alojamientos
        </Link>
      </Banner>
    </Hero>
  )
}