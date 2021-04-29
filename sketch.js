var gameState=0;
var database;
var game, player, form;
var playerCount;
var allPlayers;

function setup(){
createCanvas(400,400);
database= firebase.database();
game= new Game();
game.getState();
game.start();
}

function draw(){
if(playerCount===4){
gameState=1;
}
if(gameState===1){
    game.play();
}
}