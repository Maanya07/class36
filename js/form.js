class Form {
    constructor(){
        this.input=createInput('name:');
        this.button=createButton ('play');
        this.greeting=createElement('h3', 'Hello, ' +name);
    }
    display(){
        var title= createElement('h1','Multi-Player Car Racing Game');
        title.position(0,0);
        
       
        this.input.position(130,160);
        
        
        button.position(250,200);
        
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            
            this.greeting.position(130,116);
        })
    }
    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}
