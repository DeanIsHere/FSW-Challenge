import { Component } from "react";
import PlayerTables from "../components/PlayerTables";
import {Container, Button} from 'react-bootstrap'
import ModalCreatePlayer from "../components/ModalCreatePlayer";
import ModalSearchPlayer from "../components/ModalSearchPlayer";

class Home extends Component{
    state = {
        players: [],
        showModal: false,
        showDetails: false,
        playerId: [],
        searching: "",
        showSearch: false,
        username: "",
        email: "",
        password: "",
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
      
          if(resp.status === 200){
            this.toggleDetails()
            alert(`${this.state.exp} EXP ditambahkan ke ${this.state.playerId.username}`)
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

            this.toggleDetails()
        }else{
            alert("Update Failed")
        }    
    }

    handleChange = (event) => {

        this.setState({
          [event.target.id]: event.target.value
        })

      }

    handleDelete = async(id) => {
        const resp = await fetch(`http://localhost:5000/api/players/${id}`, {
            method: 'DELETE'
         })
        
        if(resp.status === 200){
            this.getPlayersAll()
        }
    }
    
    getPlayerId = async(id) => {
        const resp = await fetch(`http://localhost:5000/api/players/${id}`)
        const data = await resp.json()
        const dataArr = data.message
        
        this.setState({
            playerId: dataArr,
            username: dataArr.username,
            email: dataArr.email,
            password: dataArr.password
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

    toggleSearch = () => {
        this.setState({
            showSearch: !this.state.showSearch
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
                    getPlayerId={this.getPlayerId}
                    handleExp = {this.handleExp}
                    handleChange = {this.handleChange}
                    handleUpdate = {this.handleUpdate}
                    />
               <ModalCreatePlayer 
                    showModal={this.state.showModal}
                    toggleFunc = {this.toggleModal}
               />
               <Container>
               <Button variant="outline-primary" onClick={this.toggleModal}>Create New Player</Button>
               <Button variant="outline-warning m-2" onClick={this.toggleSearch}>Search  Player</Button>
               </Container>
               <ModalSearchPlayer 
               showSearch = {this.state.showSearch} 
               players = {this.state.players}
               toggleSearch={this.toggleSearch}
               />
            </div>
        )
    }
}

export default Home