import { Component } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";

class PlayerDetails extends Component{
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
         
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.username}
                                id="username"
                                onChange={this.props.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.email}
                                id="email"
                                onChange={this.props.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.password}
                                id="password"
                                onChange={this.props.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Experience</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.experience}
                                id="experience"
                                
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Level</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.lvl}
                                id="lvl"
                                
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Created</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.createdAt}
                                id="createdAt"
                               
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Created</InputGroup.Text>
                                <Form.Control
                                placeholder={this.props.playerId.updatedAt}
                                id="updatedAt"
                                
                                disabled
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Add Experience"
                                id="exp"
                                onChange={this.props.handleChange}
                                />
                                <Button variant="outline-secondary" onClick={()=>{this.props.handleExp(this.props.playerId.id)}} id="button-addon2">
                                Button
                                </Button>
                            </InputGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" onClick={()=>{this.props.handleUpdate(this.props.playerId.id)}}>Update</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </div>
        )
    }
}

export default PlayerDetails