import { Component } from "react";

class PlayerDetails extends Component{
    state ={
        player : []
    }
    getPlayerId = async(id) =>{
        const resp = await fetch(`http://localhost:5000/api/players/${id}`)
        const data = await resp.json()
        const dataArr = data.message
        
        this.setState({
            player: dataArr
        })
    }
    componentDidMount(){
        this.getPlayerId(1)
    }
    render(){
        return(
            <div>
                {this.state.player.username}
            </div>
        )
    }
}

export default PlayerDetails