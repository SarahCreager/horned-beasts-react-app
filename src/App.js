import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  imageModalHandler = (currentBeast) => {
    this.setState({showImageModal: true});
    this.setState({title: currentBeast.title});
    this.setState({description: currentBeast.description});
    this.setState({image_url: currentBeast.image_url});
  }

  render(){
    return (
      <>
        <Header title="Horned Animals"/>
        <Main onImgClick = {this.imageModalHandler}/>
        <SelectedBeast show = {this.state.showImageModal} onClose = {this.closeHandler} title = {this.state.title} description = {this.state.description} image_url = {this.state.image_url}/>
        <div id="footerDiv"><Footer author="By Sarah Creager"/></div>
      </>
    );
  }
}

export default App;
