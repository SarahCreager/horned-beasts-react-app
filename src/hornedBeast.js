import {Component} from 'react';
import heartIcon from './assets/heartIcon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'favorites': 0
    };
  }

  handleHeartClick = () => {
    const newFavorites = this.state.favorites + 1;
    this.setState({
      favorites: newFavorites
    });
  }

  render() {
    return (
      <Col sm={3}>
        <Card id="card" onClick={this.handleHeartClick}>
          <Card.Img onClick={() => this.props.onCardImgClick(this.props)} variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Img id="favoriteHeart" src={heartIcon} alt="heart icon" />
            <Card.Text id="favoriteCount">
              {this.state.favorites}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;




