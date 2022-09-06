//UPDATE biodatas+user
const handleEditBiodata = async (biodataId) => {
    let Fullname = document.getElementById("updateFullname").value
    let Address = document.getElementById("updateAddress").value
    let Email = document.getElementById("updateEmail").value
    let Age = document.getElementById("updateAge").value
    let Password = document.getElementById("updatePassword").value
    
    const resp = await fetch(`http://localhost:4030/biodata/${biodataId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: Password,
        fullname: Fullname,
        address: Address,
        email: Email,
        age: Age
      })
    })
    if(resp.status === 202){
      alert("Data Has Been Updated")
    }else{
      alert("Failed Update Data")
    }
  }
//delete data
  const handleDeleteBiodata = async (biodataId) => {
    const resp = await fetch(`http://localhost:4030/user-delete/${biodataId}`, {
      method: 'DELETE'
    })
    if(resp.status === 202){
      window.location.href = "/user-list-page"
      alert("Data Has Been Deleted")
    }else{
      alert("Failed to Delete Data")
    }
  }
//add Histories
  const addHistories = async(userId) =>{
    console.log("click input")
    let inputWin = document.getElementById("inputWin").value
    let inputLose = document.getElementById("inputLose").value
    let inputDraw = document.getElementById("inputDraw").value
    const resp = await fetch(`http://localhost:4030/add-record/${userId}`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          score: (parseInt(inputWin)*10)-(parseInt(inputLose)*10),
          attempt: parseInt(inputWin)+parseInt(inputLose)+parseInt(inputDraw),
          win: inputWin,
          lose: inputLose,
          draw: inputDraw
        })
    })
    if(resp.status === 201){
        location.reload()
        document.getElementById("inputScore").value = null
        document.getElementById("inputWin").value = null
        document.getElementById("inputLose").value = null
        document.getElementById("inputDraw").value = null
    }else{
        alert("inser History Failed")
    }
}

//DELETE histories
const handleDeleteHistory = async (histId) => {
  const resp = await fetch(`http://localhost:4030/user-histories-delete/${histId}`, {
    method: 'DELETE'
  })
  if(resp.status === 202){
    location.reload()
  }else{
    alert("Failed to Delete Record")
  }
}

//UPDATE histories
const handleEdithistory = async(histId) => {
  let Win = document.getElementById(`updateWin${histId}`).value
  let Lose = document.getElementById(`updateLose${histId}`).value
  let Draw = document.getElementById(`updateDraw${histId}`).value
  const resp = await fetch(`http://localhost:4030/histories/${histId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      score: (parseInt(Win)*10)-(parseInt(Lose)*10),
      attempt: parseInt(Win)+parseInt(Lose)+parseInt(Draw),
      win: Win,
      lose: Lose,
      draw: Draw,
    })
  })
  if(resp.status === 202){
    location.reload()
  }else{
    alert("Failed Update Record")
  }
}
