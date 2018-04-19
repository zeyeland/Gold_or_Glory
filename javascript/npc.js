    var npc1 = new goblinLV1();

    var npc2 = new dungeonKid1();

function loadNpcs(){
    
    if(player1.grid == 3){
        npc2.update();
        
       npc1.update();
    }
    
}

function dungeonKid1(){
    this.name = "dungeon kid 1";
    this.grid = 3;
    this.y = 3*50;
    this.x = 2*50;
    this.friendlyImage = new Image();
    this.friendlyImage.src = "assets/npc_Sprites/halfling_new.png";
    
    this.update = function(){
        updateAttackGrid(this,this.y/50,this.x/50,"none");
          
        
            console.log(player1.grid);
            canvas.onclick = function(e){
                if(player1.grid == 3){
                    if(event.clientY >= 150 && event.clientY <=200 && event.clientX >= 100 && event.clientX <=150 ){
                        //console.log("testingonlci NPC");
                        ctx2.font = "20px Arial";
                        ctx2.fillText("Hello World",50,50);
                    }
                }
                }//end of onclick
        
       
        drawNPC(this);      
    }//end of update
    
}//end of dungeon kid class

function goblinLV1(){
    this.health = 100;
    this.name = "Goblin Lv1";
    this.grid = 3;
    this.y = 150; //150
    this.x = 500;
    this.previousX =450;
    this.previousY=250;
    this.friendlyImage = new Image();
    this.friendlyImage.src = "assets/npc_Sprites/hobgoblin_new.png";
    

    this.update = function(){
        updateAttackGrid(this,this.y/50,this.x/50,"none");
        
       if(this.health > 0){
        drawNPC(this);
       }
            
              
    }

    
}




function drawNPC(friendlyObject){
    ctx.drawImage(friendlyObject.friendlyImage,friendlyObject.x,friendlyObject.y,50,50);
}