import HornedBeast from './hornedBeast';
import dataArray from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';



class Main extends Component {

  render(){
    const animalArray = dataArray.map((animal, index) => {
      return (
        <HornedBeast
          key = {index}
          title={animal.title}
          image_url={animal.image_url}
          description={animal.description}
          onCardImgClick={this.props.onImgClick}
        />
      );
    });

    return animalArray;
  }
}

export default Main;


