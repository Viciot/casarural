import React, { Component } from 'react'
import items from "./data"

const RoomContext = React.createContext();

// <RoomContext.Provider value={}

class RoomProvider extends Component {
  state={
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading: true,
    type:'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };  

// getData

  componentDidMount(){
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
  
    this.setState({
      rooms, 
      featuredRooms, 
      sortedRooms:rooms, 
      loading:false,
      price:maxPrice,
      maxPrice,
      maxSize     
    });  
  }

  formatData(items){
    let tempItems = items.map(item =>{
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = {...item.fields,images,id}
      return room;

    });
    return tempItems
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target
    const value = event.type === "checkbox" ?
    target.checked:target.value
    const name = event.target.name
    this.setState(
      {
        [name]:value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let{
      rooms, type, capacity, price, minSize, maxSize, breakfast,
      pets
    } = this.state

    let tempRooms = [...rooms];
  };
  render() {
    return (
        <RoomContext.Provider 
          value={{
            ...this.state, 
          getRoom: this.getRoom,
          handleChange:this.handleChange
          }}>                     
          {this.props.children}
        </RoomContext.Provider>
    );
  }
}


const RoomConsumer = RoomContext.Consumer;

/*Esto es un higher order component... ni guarra vamos, pero gracias a esto
envias los datos a traves del roomConsumer con el value*/
export function withRoomConsumer (Component){
  return function ConsumerWrapper(props){
    return <RoomConsumer>
      {value => <Component {...props} context={value}/>}
    </RoomConsumer>
  }
}

export{RoomProvider, RoomConsumer, RoomContext}