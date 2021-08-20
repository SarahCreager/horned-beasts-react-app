import HornedBeast from './hornedBeast';
import dataArray from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import BeastForm from './beastForm';
import { Container } from 'react-bootstrap';

const allHorns = dataArray;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsArray: allHorns
    };
  }

  handleChange = (event) => {
    const selection = event.target.value;

    if (selection === '1') {
      this.setState({ hornsArray: allHorns.filter (animal => animal.horns === 1 )});
    } else if (selection === '2') {
      this.setState({ hornsArray: allHorns.filter (animal => animal.horns === 2 )});
    } else if (selection === '3') {
      this.setState({ hornsArray: allHorns.filter (animal => animal.horns === 3 )});
    } else if (selection === '100') {
      this.setState({ hornsArray: allHorns.filter (animal => animal.horns === 100 )});
    } else {
      this.setState({ hornsArray: allHorns});
    }
  }

  render(){
    const animalArray = this.state.hornsArray.map((animal) => {
      return (
        <HornedBeast
          key = {animal.image_url}
          title = {animal.title}
          image_url = {animal.image_url}
          description = {animal.description}
          keyword = {animal.keyword}
          horns = {animal.horns}
          onCardImgClick = {this.props.onImgClick}
        />
      );
    });

    return (
      <>
        <BeastForm handleChange = {this.handleChange}/>
        <Container id="mainContainer">
          {animalArray}
        </Container>
      </>
    );
  }
}

export default Main;


