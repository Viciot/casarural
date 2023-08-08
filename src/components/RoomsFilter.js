import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from "../components/Title"; 

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange, type, capaxity, price, minPrice, maxPrice,inSize,maxSize,breakfast,pets
  } = context;
  
  
  return (
    <section className="filter-continer">
     <Title title="Encuentra tu casa rural ideal" />
     <form className="filter-form">
      {/*select type */}
      <div className="form-group">
        <label htmlFor="type">Tipo de habitación</label>
        <select 
          name="type" 
          id="type" 
          value={type} 
          className='form-control' 
          onChange={handleChange}
        />
      </div>
      {/* end select type*/}
     </form>
    </section>
  )
}
