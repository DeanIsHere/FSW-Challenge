import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Component } from "react";

class ModalCreatePlayer extends Component{
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleSubmit = async () => {
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    const resp = await fetch('http://localhost:5000/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if(resp.status === 201){
      this.props.toggleFunc()
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render(){
    return(
      <Modal show={this.props.showModal} onHide={this.props.toggleFunc}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">User Name</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="username"
              onChange={this.handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              id="email"
              onChange={this.handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              id="password"
              onChange={this.handleChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalCreatePlayer