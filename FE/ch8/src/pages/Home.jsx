import { Component } from "react";
import PlayerTables from "../components/PlayerTables";
import {Container, Button} from 'react-bootstrap'
import ModalCreatePlayer from "../components/ModalCreatePlayer";
import PlayerDetails from "../components/PlayerDetails";

class Home extends Component{
    state = {
        players: [],
        showModal: false,
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
    
    handleUpdate = async(id) => {
        const data = {
            username: " ",
            email: " ",
            password: " "
          }
        const resp = await fetch(`http://localhost:5000/api/players/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
         })
        console.log(resp)
        
        if(resp.status === 200){
            alert(`player dengan id = ${id} telah diupdate`)
            this.getPlayersAll()
        }else{
            alert(`player dengan id = ${id} gagal diupdate`)
        }    
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
    render(){
        return(
            <div className="players-table">
               <PlayerTables 
                    players = {this.state.players} 
                    deleteFunc={this.handleDelete}
                    updateFunc={this.handleUpdate}/>
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