import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from "./Title"

export default class Services extends Component {
  state={
    /*El state de arriba es para tener precargados los items?*/
    services:[
        {
            icon:<FaCocktail/>,
            title:"Free cocktails",
            info:"Esto es información sobre cada uno de los servicios que puede ofrecer la organización"
        },
        {
            icon:<FaHiking/>,
            title:"Escalada",
            info:"Esto es información sobre cada uno de los servicios que puede ofrecer la organización"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Transporte",
            info:"Esto es información sobre cada uno de los servicios que puede ofrecer la organización"
        },
        {
            icon:<FaBeer/>,
            title:"Cerveza local",
            info:"Esto es información sobre cada uno de los servicios que puede ofrecer la organización"
        }
    ]
  }  
  render() {
    return (
      <section className="services">
        <Title title="servicios" />
        <div className="services-center">
        {this.state.services.map((item, index) => {
            return <article key={index} className="service" /*Usar esta manera de mapear solo cuando los elmentos sean fijos*/>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>  
              <p>{item.info}</p>
            </article>
            /*Todo queda chachi piruli en un grid pq la clase services-center está en css puesto así*/
        })}
        </div>
      </section>
    );
  }
}
