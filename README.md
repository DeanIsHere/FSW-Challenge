# FSW-Challenge
My repository for challenge document of front end website development bootcamp by Binar Academy

DB setup:
sequelize model:generate --name user --attributes username:string, password:string, role:string, roomId:integer
sequelize model:generate --name room --attributes room_name: string, player1_id:integer, player2_id:integer, player1_pick:string, player2_pick:string, player1_score:integer, player2_score:integer, player1_result:string, player2_result:string
