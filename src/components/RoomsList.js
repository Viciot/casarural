import React from 'react';
import Room from "./Room";


export default function RoomsList({rooms}) {
if(rooms.lenght === 0){
  return (
    <div className="empty-search">
      <h3>No hay coincidencias con los parámetros del filtro</h3>
    </div>
  )
}


  return (
    <div>
      Hello from room list
    </div>
  )
}
