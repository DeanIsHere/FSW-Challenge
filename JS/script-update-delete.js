const handleEditBiodata = async (biodataId) => {
    let Fullname = document.getElementById("updateFullname").value
    let Address = document.getElementById("updateAddress").value
    let Email = document.getElementById("updateEmail").value
    let Age = document.getElementById("updateAge").value
  
    
    const resp = await fetch(`http://localhost:4030/biodata/${biodataId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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