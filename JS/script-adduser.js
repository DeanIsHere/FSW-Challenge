const inputHandler = async() =>{
    let inputUsername = document.getElementById("inputUsername").value
    let inputPassword = document.getElementById("inputPassword").value
    let inputFullname = document.getElementById("inputFullname").value
    let inputAddress = document.getElementById("inputAddress").value
    let inputEmail = document.getElementById("inputEmail").value
    let inputAge = document.getElementById("inputAge").value
    
    const resp = await fetch('http://localhost:4030/add-user',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: inputUsername,
            password: inputPassword,
            fullname: inputFullname,
            address: inputAddress,
            email: inputEmail,
            age: inputAge
        })
    })

    if(resp.status === 201){
        alert("Successfully insert data")
        document.getElementById("inputUsername").value = null
        document.getElementById("inputPassword").value = null
        document.getElementById("inputFullname").value = null
        document.getElementById("inputAddress").value = null
        document.getElementById("inputEmail").value = null
        document.getElementById("inputAge").value = null
    }else{
        alert("Inser data failed")
    }
}