class Game{
    constructor(){
        
    }
    getState(){
        var gameStateref= database.ref('gameState');
        gameStateref.on('value', function(data){
            gameState= data.val();
        })
    }

update (state){
database.ref('/').update({
    gameState:state
})
}

async start(){
    if(gameState===0){
        form=new Form();
        form.display();
        player= new Player();
        var playerCountref=await database.ref('playerCount').once('value');
        if(playerCountref.exists){
            playerCount=playerCountref.val();
            player.getCount();
        }
    }
}
play(){
    form.hide();
    textSize= (30)
    text('Game Starts', 120, 100);
    Player.gerPlayerinfo();
    if(allPlayers!== undefined){
var display_position= 130;
for (var plr in allPlayers){
    if(plr=== 'player'+player.index){
        fill('red');
    }
    else(fill('black'));
    display_position= display_position+20;
    textSize(15);
    text(allPlayers[plr].name+ ':'+allPlayers[plr].distance, 120, display_position);
}
    }
}

}
