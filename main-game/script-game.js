const bot_list = ["rock","paper","scissors"];
let bot_sample = ""
let user_sample = ""
let user_hand_batu = document.getElementById("batu")
let user_hand_gunting = document.getElementById("gunting")
let user_hand_kertas = document.getElementById("kertas")
let center_item = document.getElementById("center-item")

const comparator = (user_sample,bot_sample) =>{
    if(user_sample === bot_sample){
        console.log('Tie')
    }
    else if(user_sample == 'rock'){
        if(bot_sample == 'paper'){
            console.log('Kalah')
        }else{
            console.log('Menang')
        }
    }
    else if(user_sample == 'scissors'){
        if(bot_sampler == 'rock'){
            console.log('Kalah')
        }else{
            console.log('Menang')
        }
    }
    else if(user_sample == 'paper'){
        if(bot_sample == 'scissors'){
            console.log('Kalah')
        }else{
            console.log('Menang')
        }
    }
    console.log(`pilihan player: ${user_sample}`)
    console.log(`pilihan bot: ${bot_sample}`)
}

user_hand_batu.addEventListener("click", () =>{
    bot_sample = bot_list[Math.floor(Math.random()*bot_list.length)];
    comparator("rock",bot_sample)
})
user_hand_gunting.addEventListener("click", () =>{
    bot_sample = bot_list[Math.floor(Math.random()*bot_list.length)];
    comparator("scissors",bot_sample)
})
user_hand_kertas.addEventListener("click", () =>{
    bot_sample = bot_list[Math.floor(Math.random()*bot_list.length)];
    comparator("paper",bot_sample)
})