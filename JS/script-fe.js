const loginChecker = async() =>{
    let loginUsername = document.getElementById("loginUsername").value
    let loginPassword = document.getElementById("loginPassword").value
    const resp = await fetch('http://localhost:4030/login',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name:loginUsername,
            password:loginPassword
        })
    })

    if(resp.status === 200){
        window.location.href = `/user-list-page`
    }else{
        alert("Failed to Login")
    }
}