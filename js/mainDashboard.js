  const validateLogin = () => {
    const data = localStorage.getItem('token-login')
    if(data === null){
      location.href = '/login'
    }
  }
  
  validateLogin()
  
  const getRecordData = async () =>{
    console.log("i am working")
    const resp = await fetch('http://localhost:8989/result',{
      method: 'GET',
      headers:{
        Authorization: localStorage.getItem('token-login')
      }
    })
    const data = await resp.json()
    const listRoom = document.getElementById('recordlist')
  
    let recordList = ""
    data.forEach(element => {
      recordList = recordList + `<tr><th>${element.id}</th>
                              <td>${element.room_name}</td>   
                              <td>${element.player1_id}</td>
                              <td>${element.player2_id}</td>
                              <td>${element.player1_pick}</td>
                              <td>${element.player2_pick}</td>
                              <td>${element.player1_score}</td>
                              <td>${element.player2_score}</td>
                              <td>${element.player1_result}</td>
                              <td>${element.player2_result}</td>
                              <tr>`
    });
  
    listRoom.innerHTML = recordList
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
    const listRoom = document.getElementById('availroom')
  
    let recordList = ""
    data.forEach(element => {
    if(element.player1_id === null || element.player2_id === null){
      recordList = recordList + `<tr><th>${element.id}</th>
                              <td>${element.room_name}</td>   
                              <td>${element.player1_id}</td>
                              <td>${element.player2_id}</td>
                              <td><button type="submit" class="btn btn-primary btn-hist" onclick="fightHandler(${element.id})">Enter</button></td>
                              <tr>`
    }
    });
  
    listRoom.innerHTML = recordList
  }
  
  const fightHandler = async(id) =>{
    let pick1 = document.getElementById("playerPick1").value
    let pick2 = document.getElementById("playerPick2").value
    let pick3 = document.getElementById("playerPick3").value
    let finalPick = ""
    const hand = ["B","K","G"]
    if(hand.includes(pick1) && hand.includes(pick2) && hand.includes(pick3)){
        finalPick = pick1+pick2+pick3
        console.log(finalPick)
        const resp = await fetch(`http://localhost:8989/fight/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token-login')
            },
            body: JSON.stringify({
                player_pick: finalPick
            })
        })
        if(resp.status === 202){
            alert("PICK BERHASIL DIMASUKAN")
            location.reload()
        }else{
            alert("PICK GAGAL DIMASUKAN")
        }
    }else{
        alert("PICK YANG BENAR!")
    }
    console.log("klik")
  }

  const handleLogout = () => {
    localStorage.removeItem('token-login')
    location.href = '/login'
  }

  getRecordData()
  getRoomData()