import React from 'react';
import Room from "./Room";


export default function RoomsList({rooms}) {
if(rooms.lenght === 0){
  return (
    <div className="empty-search">
      <h3>No hay coincidencias con los parámetros de búsqueda</h3>
    </div>
  )
}


  return (
    <section className="roomslist">
      <div className="roomslist-center"> 
        {rooms.map(item => {
            return <Room key={item.id} room={item} />
          })}
      </div>
    </section>
  )
}
