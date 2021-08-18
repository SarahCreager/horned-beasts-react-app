import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
      <Header title="Horned Animals"/>
      <Container>
        <Main />
      </Container>
      <Footer author="By Sarah Creager"/>
    </>
  );
}

export default App;
