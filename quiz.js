class Quiz{

constructor()
{
    this.winner=createElement('h1')
}

    getState()
    {
        db.ref("gameState").on("value", function(data){
            gameState=data.val();
            console.log(gameState)
        })
    }

    updateState(g)
    {
        db.ref("/").update({gameState: g});
    }

     start()
    {
        console.log("in start")
        if(gameState===0)
        {
            contestant=new Contestant()
            contestant.getCount()
            quest=new Question()
            quest.display();
        }
 
    }

   result()
   {
        background("cyan")
        quest.wait.hide();
        Contestant.getInfo();

        if( allContestant!== undefined)
        {
            var pos=250
            textSize(45)
            fill("blue")
            text("*** RESULT ***", 250,220)
            for(var cons in allContestant)
            {    pos+=30;
                if(allContestant[cons].Option==1)
                {
                fill("green"); 
                textSize(22)
                console.log("hi in red")
                text("*** WINNER OF QUIZ***",450,pos)
                }
                else {fill("black");}
               
                textSize(25)
                text(allContestant[cons].Name +" :  "+ allContestant[cons].Option, 300,pos )
                
            }
        }
    
   }

}