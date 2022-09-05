const handleEditBiodata = async (biodataId) => {
    let Fullname = document.getElementById("Fullname").value
    let Address = document.getElementById("Address").value
    let Job = document.getElementById("Job").value
    let Age = document.getElementById("Age").value
  
    
    const resp = await fetch(`http://localhost:7070/biodata/${biodataId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: Fullname,
        address: Address,
        job: Job,
        age: Age
      })
    })
    if(resp.status === 202){
      alert("Data Has Been Updated")
    }else{
      alert("Failed Update Data")
    }
  }