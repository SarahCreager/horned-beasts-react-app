import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image_url} alt="animal image"></img>
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
