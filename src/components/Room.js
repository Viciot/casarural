import React from 'react';
import {Link} from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({room}) {
  const{ name, slug, images, price } = room;
  
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg } alt="single room"/>
        <div className="price-top">
          <h6>${price}</h6>
          <p>Por noche</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Detalles
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}


//No entiendo muy bien la necesidad de este trozo, pq idicamos el tipo de datos? 
//-> creo que es para bajar los props a traves del componente Room
Room.propTypes = {
  room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
  })
}
