import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


class BeastForm extends Component {
  render() {
    return (
      <Container id="formContainer">
        <Form.Select onChange={this.props.handleChange} aria-label="Default select example" size="lg">
          <option>Filter by number of horns.</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">One Hundred</option>
        </Form.Select>
      </Container>
    );
  }
}


export default BeastForm;
