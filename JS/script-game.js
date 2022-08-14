const bot_list = ["batu","kertas","gunting"];
let user_hand_batu = document.getElementById("batu")
let user_hand_gunting = document.getElementById("gunting")
let user_hand_kertas = document.getElementById("kertas")
let center_item = document.getElementById("center-item")
let refresh = document.getElementById("refresh-button")
let addElement1 = [...document.getElementsByClassName("player-hand")]

let active = true

user_hand_kertas.addEventListener("click", () =>{
    let user_sample ="kertas"
    stat= new Status(user_sample)
    active = false
    console.log(stat)
    gamerun()
})
user_hand_batu.addEventListener("click", () =>{
    let user_sample ="batu"
    stat= new Status(user_sample)
    active = false
    console.log(stat)
    gamerun()
})
user_hand_gunting.addEventListener("click", () =>{
    let user_sample ="gunting"
    stat= new Status(user_sample)
    active = false
    console.log(stat)
    gamerun()
})  

class Status{
    constructor(user_sample){
        this.user = user_sample
        this.bot = bot_list[Math.floor(Math.random()*bot_list.length)]
    }
}
const comparator = (user_sample,bot_sample) =>{
    if(user_sample === bot_sample){
        console.log('Tie')
        
        center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 73.svg" alt=""><img style="z-index: 2; position: absolute;margin-left: -55px; margin-top: 80px;" src="game-assets/DRAW.svg" alt="">`
    }
    else if(user_sample == 'batu'){
        if(bot_sample == 'kertas'){
            console.log('Kalah')
            center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 67.svg" alt=""><img style="z-index: 2; position: absolute;margin-left: -55px; margin-top: 80px;" src="game-assets/COM WIN.svg" alt="">`
        }else{
            console.log('Menang')
            
            center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 67.svg" alt=""> <img style="z-index: 2; position: absolute;margin-left: -95px; margin-top: 40px;" src="game-assets/player win.svg" alt="">`
        }
    }
    else if(user_sample == 'gunting'){
        if(bot_sample == 'batu'){
            console.log('Kalah')
            center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 67.svg" alt=""><img style="z-index: 2; position: absolute;margin-left: -55px; margin-top: 80px;" src="game-assets/COM WIN.svg" alt="">`
        }else{
            console.log('Menang')
            
            center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 67.svg" alt=""> <img style="z-index: 2; position: absolute;margin-left: -95px; margin-top: 40px;" src="game-assets/player win.svg" alt="">`
        }
    }
    else if(user_sample == 'kertas'){
        if(bot_sample == 'gunting'){
            console.log('Kalah')
            center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 67.svg" alt=""><img style="z-index: 2; position: absolute;margin-left: -55px; margin-top: 80px;" src="game-assets/COM WIN.svg" alt="">`
        }else{
            console.log('Menang')
            
            center_item.innerHTML = `<img style="z-index: 1; position: absolute; margin-left: -150px;"src="game-assets/Rectangle 67.svg" alt=""> <img style="z-index: 2; position: absolute;margin-left: -95px; margin-top: 40px;" src="game-assets/player win.svg" alt="">`
        }
    }
    console.log(`pilihan player: ${user_sample}`)
    console.log(`pilihan bot: ${bot_sample}`)
}

const kotak_bot = (bot_sample) =>{
    switch (bot_sample) {
        case "batu":
            document.querySelector('svg #kotak-batu-bot[fill]').setAttribute("fill","#C4C4C4")
            break;
        case "kertas":
            document.querySelector('svg #kotak-kertas-bot[fill]').setAttribute("fill","#C4C4C4")
            break;
        case "gunting":
            document.querySelector('svg #kotak-gunting-bot[fill]').setAttribute("fill","#C4C4C4")
            break;
    }
}

const refresh_button = () => {
    refresh.addEventListener("click", () =>{
        center_item.innerHTML = `<img style="margin-top: 90px;"src="game-assets/VS.svg" alt=""></img>`
        document.querySelector('svg #kotak-gunting-pl[fill]').setAttribute("fill","#9C835F")
        document.querySelector('svg #kotak-batu-pl[fill]').setAttribute("fill","#9C835F")
        document.querySelector('svg #kotak-kertas-pl[fill]').setAttribute("fill","#9C835F")
        document.querySelector('svg #kotak-gunting-bot[fill]').setAttribute("fill","#9C835F")
        document.querySelector('svg #kotak-batu-bot[fill]').setAttribute("fill","#9C835F")
        document.querySelector('svg #kotak-kertas-bot[fill]').setAttribute("fill","#9C835F")
        bot_sample = bot_list[Math.floor(Math.random()*bot_list.length)];
        addElement1.forEach(addElement3 => {
            addElement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })
}

const kotak_user = (user_sample) =>{
    switch (user_sample) {
        case "batu":
            document.querySelector('svg #kotak-batu-pl[fill]').setAttribute("fill","#C4C4C4")
            break;
        case "kertas":
            document.querySelector('svg #kotak-kertas-pl[fill]').setAttribute("fill","#C4C4C4")
            break;
        case "gunting":
            document.querySelector('svg #kotak-gunting-pl[fill]').setAttribute("fill","#C4C4C4")
            break;
    }
    addElement1.forEach(addElement3 => {
        addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
    })
}

const gamerun = () => {
    comparator(stat.user,stat.bot)
    kotak_bot(stat.bot)
    kotak_user(stat.user)
    refresh_button()
}
// HOVER FUNCTION
// batu
function bigImg1(x) {
    x.style.height = "152px";
    x.style.width = "188px";
  }
  
  function normalImg1(x) {
    x.style.height = "92px";
    x.style.width = "128px";
  }
// kertas
  function bigImg2(x) {
    x.style.height = "210px";
    x.style.width = "165px";
  }
  
  function normalImg2(x) {
    x.style.height = "150px";
    x.style.width = "115px";
  }
//   gunting
  function bigImg3(x) {
    x.style.height = "220px";
    x.style.width = "194px";
  }
  
  function normalImg3(x) {
    x.style.height = "160px";
    x.style.width = "134px";
  }

// another hover function
  // if (active === true) {
//     user_hand_kertas.addEventListener("mouseover", () =>{
//         document.querySelector('svg #kotak-kertas-pl[fill]').setAttribute("fill","#C4C4C4")
//     })
//     user_hand_kertas.addEventListener("mouseout", () =>{
//         document.querySelector('svg #kotak-kertas-pl[fill]').setAttribute("fill","#9C835F")
//     })
//     user_hand_batu.addEventListener("mouseover", () =>{
//         document.querySelector('svg #kotak-batu-pl[fill]').setAttribute("fill","#C4C4C4")
//     })
//     user_hand_batu.addEventListener("mouseout", () =>{
//         document.querySelector('svg #kotak-batu-pl[fill]').setAttribute("fill","#9C835F")
//     })
//     user_hand_gunting.addEventListener("mouseover", () =>{
//         document.querySelector('svg #kotak-gunting-pl[fill]').setAttribute("fill","#C4C4C4")
//     })
//     user_hand_gunting.addEventListener("mouseout", () =>{
//         document.querySelector('svg #kotak-gunting-pl[fill]').setAttribute("fill","#9C835F")
//     }) 
// }