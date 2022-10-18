import { Component } from "react";
import {Modal, Button, InputGroup, Form, Table} from 'react-bootstrap'

class ModalSearchPlayer extends Component{
    state ={
        searchPlayer : []
    }   
    handleSearch = (event) => {
        const currentValue = event.target.value
        let listPlayer = []

        this.props.players.forEach(e => {
            if(e.username.includes(currentValue)||e.email.includes(currentValue)||String(e.lvl).includes((currentValue))||String(e.experience).includes((currentValue))){
                listPlayer.push(e)
            }
        });

        if(currentValue !== ""){
            this.setState({
                searchPlayer: listPlayer
            })
        }else{
            this.setState({
                searchPlayer: []
            })
        }
      }
      
    render(){
        return(
            <div>
                <Modal show={this.props.showSearch} onHide={this.props.toggleSearch}>
                    <Modal.Header closeButton>
                    <Modal.Title>Search Player</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Search Player"
                            onChange={this.handleSearch}
                            id="search"
                            />
                        </InputGroup>
                        {this.state.search}
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Experience</th>
                                <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.searchPlayer.map((ply) => (
                                        <tr key={ply.id}>
                                            <td>{ply.id}</td>
                                            <td>{ply.username}</td>
                                            <td>{ply.email}</td>
                                            <td>{ply.experience}</td>
                                            <td>{ply.lvl}</td>
                                        </tr>
                                          ))
                                }
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ModalSearchPlayer