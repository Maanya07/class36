class Player{
    constructor(){
       this.index=null
       this.distance=0
       this.name=null 
    }


    getCount(){
        var getCountref=database.ref('playerCount');
        getCountref.on('value', function (data){
            playerCount= data.val();
        })

    }
    updateCount (count) {
        database.ref ('/').update({
         playerCount:count 
        })
    }
    update (){
        var playerIndex= 'players/player'+ this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance

        })
    }

    static getPlayerinfo(){
        var playerInforef=database.ref('players')
        playerInforef.on('valur',(data)=>{ 
            allPlayers=data.val();
        })
       
    }
}