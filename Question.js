class Question{

    constructor()
    {
        this.title=createElement('h1'); this.question=createElement("h2"); 
        this.button1=createButton("SUBMIT");
        this.button2=createButton("clear database")
        this.input1=createInput("").attribute("placeHolder",'ENTER NAME');
        this.input2=createInput("").attribute("placeHolder","Enter Correct Option No"); 
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.option1=createElement('h3');  this.option2=createElement('h3');
        this.option3=createElement('h3');  this.option4=createElement('h3');
        this.wait=createElement('h2')
        
    }
    
    display()
    {
        console.log("display called")
        this.title.html("***QUIZ GAME***");
        this.title.position(250,10);
        this.question.html("Quest : What starts with E and end with E but has only letter ?")
        this.question.position(80,60);

        this.option1.html("1. Envelope");
        this.option1.position(150,100);
        this.option2.html("2. Estimate");
        this.option2.position(150,120);
        this.option3.html("3. Everyone");
        this.option3.position(150,140);
        this.option4.html("4. Example");
        this.option4.position(150,160);
        this.button2.position(650,37)
        this.button1.position(300,270 );
        
        this.button1.mousePressed(()=>{
            
            console.log("mousePressed")
             cname=this.input1.value();
             answer=this.input2.value();
             contestantCount++;
            contestant.updateCount(contestantCount)
            contestant.updateName(cname,answer)
             this.input1.hide()
             this.input2.hide();
             this.button1.hide();
             //this.button2.hide();
             this.wait.html("Kindly Wait- Result Will be display Soon.....")
             this.wait.position(200,270)
             
        });

        this.button2.mousePressed(()=>{
            db.ref("/").update({gameState: 0})
            db.ref("/").update({contestantCount: 0})
            db.ref("/").update({Contestants:null})
        })

       
    }
    
    
    }