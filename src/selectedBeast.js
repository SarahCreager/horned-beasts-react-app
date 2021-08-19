import { Component } from "react";
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
        <img src={this.props.img} alt="animal image" />
        <Modal.Body>{this.props.description}</Modal.Body>
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
