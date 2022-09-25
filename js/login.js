const submitLogin = async () => {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    console.log(username)
    // console.log("Im clicked")
    const resp = await fetch('http://localhost:8989/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
  
    if(resp.status === 200){
      const data = await resp.json()
      localStorage.setItem('token-login', data.token)
      console.log(data.token)
      if(data.user.role === 'admin'){
        console.log('aku admin')
        const page = await fetch('http://localhost:8989/admin-dashboard', {
            method: 'GET',
            headers: {
              Authorization: localStorage.getItem('token-login')
            }
          })
        console.log(page)
      }else{
        location.href = '/main-dashboard'
        console.log('aku player')
      }
    }else{
      alert('WRONG USERNAME OR PASSWORD')
      location.reload()
    }
    
  }