const validateLogin = () => {
    const data = localStorage.getItem('token-login')
    if(data === null){
      location.href = '/login'
    }
  }
  
  validateLogin()

  const deleteRoomHandler = async (roomid) =>{
  const resp = await fetch(`http://localhost:8989/deleteRoom/${roomid}`, {
    method: 'DELETE',
    headers:{
      Authorization: localStorage.getItem('token-login')
    }
  })
  console.log(resp.status)
  if(resp.status === 202){
    location.reload()
  }else{
    alert("Failed to Delete Data")
    console.log(resp.status)
  }
}

const deletePlayerHandler = async (playerid) =>{
  const resp = await fetch(`http://localhost:8989/deletePlayer/${playerid}`, {
    method: 'DELETE',
    headers:{
      Authorization: localStorage.getItem('token-login')
    }
  })
  console.log(resp.status)
  if(resp.status === 202){
    location.reload()
  }else{
    alert("Failed to Delete Data")
    console.log(resp.status)
  }
}

const getRoomData = async () =>{
  console.log("i am working")
  const resp = await fetch('http://localhost:8989/room',{
    method: 'GET',
    headers:{
      Authorization: localStorage.getItem('token-login')
    }
  })
  const data = await resp.json()
  const listRoom = document.getElementById('roomlist')

  let roomList = ""
  data.forEach(element => {
    roomList = roomList + `<tr><th>${element.id}</th>
                            <td>${element.room_name}</td>   
                            <td>${element.player1_id}</td>
                            <td>${element.player2_id}</td>
                            <td>${element.player1_pick}</td>
                            <td>${element.player2_pick}</td>
                            <td>${element.player1_score}</td>
                            <td>${element.player2_score}</td>
                            <td>${element.player1_result}</td>
                            <td>${element.player2_result}</td>
                            <td><button type="submit" class="btn btn-danger btn-hist" onclick="deleteRoomHandler(${element.id})">Delete</button></td>
                            <tr>`
  });

  listRoom.innerHTML = roomList
}  

const getPlayerData = async () =>{
  console.log("i am working")
  const resp = await fetch('http://localhost:8989/player',{
    method: 'GET',
    headers:{
      Authorization: localStorage.getItem('token-login')
    }
  })
  const data = await resp.json()
  const listRoom = document.getElementById('playerlist')

  let playerList = ""
  data.forEach(element => {
    playerList = playerList + `<tr><th>${element.id}</th>
                            <td>${element.username}</td>   
                            <td>${element.role}</td>
                            <td><button type="submit" class="btn btn-danger btn-hist" onclick="deletePlayerHandler(${element.id})">Delete</button></td>
                            <tr>`
  });

  listRoom.innerHTML = playerList
}

const addRoomHandler = async () =>{
  console.log('I am clicked')
  const servername = document.getElementById("roomName").value
  const resp = await fetch('http://localhost:8989/create-room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token-login')
    },
    body: JSON.stringify({
     room_name: servername
    })
  })

  if(resp.status !== 201){
    alert('FAILED TO CREATE NEW SERVER')
  }else{
    alert('NEW SERVER IS CREATED')
    location.reload()
  }
}

const handleLogout = () => {
  localStorage.removeItem('token-login')
  location.href = '/login'
}


getRoomData()
getPlayerData()