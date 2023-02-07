import React, { useContext } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import {Link, useParams} from "react-router-dom";
import {RoomContext} from "../context";
import StyledHero from "../components/StyledHero";




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

  const [mainImg,...defaultImg] = images;
  console.log(defaultImg);

  return (
    <>
    <StyledHero img ={mainImg || this.sate.defaultBcg}>      
      <Banner title={`${name} room`}>
        <Link to="/rooms" className='btn-primary'>
          Volver a los alojamientos
        </Link>
      </Banner>
    </StyledHero>
    <section className="single-room">
      <div className="single-room-images">
      {defaultImg.map((item,index)=>{
        return <img key={index} src={item} alt={name} />
      })}
      </div>
      <div className="single-room-info">
        <article className="desc">
          <h3>Descripción</h3>
          <p>{description}</p>
        </article>
        <article className="info">
          <h3>Info</h3>
          <h6>Precio : €{price}</h6>
          <h6>Tamaño : {size}m2</h6>
          <h6>Capacidad : {
            capacity > 1 ? `${capacity} personas` : `${capacity} persona`
            }
            </h6>
            <h6>{pets ? "Se permiten mascotas":"Mascotas no permitidas"}</h6>
            <h6>{breakfast && "Desayuno incluido"}</h6>
        </article>
      </div>    
    </section>
    <section className="room-extras">
      <h6>Extras</h6>            
      <ul className="extras">
            {extras.map((item,index)=>{
              return <li key={index}>- {item}</li>;
            })}
      </ul>
    </section>
    </>
  )
}