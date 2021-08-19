import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Component } from 'react';
import SelectedBeast from './selectedBeast';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageModal: false,
      title: '',
      description: '',
      image_url: '',
    };
  }

  closeHandler = () => {
    this.setState({ showImageModal: false });
  }

  imageModalHandler = () => {
    this.setState({showImageModal: true});
    this.setState({title: 'hello'}); //TODO: figure out how to reference the clicked card's title
    this.setState({description: 'can you hear me'}); //TODO: figure out how to reference the clicked card's description
    this.setState({image_url: ''}); //TODO: figure out how to reference the clicked card's image_url
  }

  render(){
    return (
      <>
        <Header title="Horned Animals"/>
        <Container>
          <Main onImgClick = {this.imageModalHandler}/>
        </Container>
        <SelectedBeast show = {this.state.showImageModal} onClose = {this.closeHandler} title= {this.state.title} description= {this.state.description} image_url= {this.state.image_url} />
        <Footer author="By Sarah Creager"/>
      </>
    );
  }
}

export default App;
