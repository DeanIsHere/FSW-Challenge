import { Component } from "react";
import PlayerTables from "../components/PlayerTables";
import {Container, Button} from 'react-bootstrap'
import ModalCreatePlayer from "../components/ModalCreatePlayer";
import PlayerDetails from "../components/PlayerDetails";

class Home extends Component{
    state = {
        players: [],
        showModal: false,
        showDetails: false,
        playerId: []

    }
    
    handleDelete = async(id) => {
        const resp = await fetch(`http://localhost:5000/api/players/${id}`, {
            method: 'DELETE'
         })
        console.log(resp)
        
        if(resp.status === 200){
            this.getPlayersAll()
        }
    }
    
    getPlayerId = async(id) => {
        const resp = await fetch(`http://localhost:5000/api/players/${id}`)
        const data = await resp.json()
        const dataArr = data.message
        
        this.setState({
            playerId: dataArr
        })
        this.toggleDetails()
    }
    getPlayersAll = async() => {
        const resp = await fetch('http://localhost:5000/api/players')
        const data = await resp.json()
        const dataArr = data.message
        
        this.setState({
            players: dataArr
        })
    }
    
    componentDidMount(){
        this.getPlayersAll()
    }


    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        this.getPlayersAll()
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
        this.getPlayersAll()
    }

    render(){
        return(
            <div className="players-table">
               <PlayerTables 
                    players = {this.state.players} 
                    deleteFunc={this.handleDelete}
                    updateFunc={this.handleUpdate}
                    showDetails={this.state.showDetails}
                    toggleDetails= {this.toggleDetails}
                    playerId ={this.state.playerId}
                    getPlayerId={this.getPlayerId}/>
               <ModalCreatePlayer 
                    showModal={this.state.showModal}
                    toggleFunc = {this.toggleModal}
               />
               <Container>
               <Button variant="info" onClick={this.toggleModal}>Create New Player</Button>
               </Container>
            </div>
        )
    }
}

export default Home