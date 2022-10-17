import { Component } from "react";
import {Container, Table, Button} from 'react-bootstrap'
import PlayerDetails from "./PlayerDetails";


class PlayerTables extends Component{
    render(){
        return(
            <div className="players-table">
                <Container>
                    <h1>Hello Admin</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.players.map((ply) => (
                                <tr key={ply.id}>
                                    <td>#</td>
                                    <td>{ply.id}</td>
                                    <td>{ply.username}</td>
                                    <td>{ply.email}</td>
                                    <td>
                                    <Button variant="danger" onClick={()=>{this.props.deleteFunc(ply.id)}}>Delete</Button>
                                    <Button variant="success m-2" onClick={()=>{this.props.getPlayerId(ply.id)}}>details</Button>
                                    </td>
                                </tr>
                                  ))
                            }
                            
                        </tbody>
                    </Table>
                </Container>
                {/* for show player details */}
                <PlayerDetails 
                showDetails={this.props.showDetails}
                toggleDetails= {this.props.toggleDetails}
                playerId = {this.props.playerId}
                />
            </div>
        )
    }
}

export default PlayerTables