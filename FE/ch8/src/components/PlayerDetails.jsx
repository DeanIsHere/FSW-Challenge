import { Component } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";

class PlayerDetails extends Component{
    state ={
        username: this.props.playerId.username,
        email: this.props.playerId.email,
        password: this.props.playerId.password,
        exp: 0
    }

    handleExp = async(id) => {
        const data = {
            exp: this.state.exp,
          }
      
          const resp = await fetch(`http://localhost:5000/api/players/exp/${id}`, {
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

    handleUpdate = async(id) => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          }
        const resp = await fetch(`http://localhost:5000/api/players/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
         })
        
        if(resp.status === 200){
            console.log("updated")
            this.props.toggleDetails()
            window.location.reload()
        }else{
            console.log("update failed")
        }    
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
    
    render(){
        return(
            <div>
                <Modal show={this.props.showDetails} onHide={this.props.toggleDetails}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.playerId.username} Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
                                <Form.Control
                                placeholder="id"
                                id="id"
                                value={this.props.playerId.id}
                                onChange={this.handleChange}
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.username}
                                id="username"
                                onChange={this.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.email}
                                id="email"
                                onChange={this.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.password}
                                id="password"
                                onChange={this.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Experience</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.experience}
                                id="experience"
                                onChange={this.handleChange}
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Level</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.lvl}
                                id="lvl"
                                onChange={this.handleChange}
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Created</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.createdAt}
                                id="createdAt"
                                onChange={this.handleChange}
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Created</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.updatedAt}
                                id="updatedAt"
                                onChange={this.handleChange}
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Add Experience"
                                id="exp"
                                onChange={this.handleChange}
                                />
                                <Button variant="outline-secondary" onClick={()=>{this.handleExp(this.props.playerId.id)}} id="button-addon2">
                                Button
                                </Button>
                            </InputGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" onClick={()=>{this.handleUpdate(this.props.playerId.id)}}>Update</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    {this.state.exp}
                </Modal>
            </div>
        )
    }
}

export default PlayerDetails