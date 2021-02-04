var db, gameState=0, contestantCount,contestant, quiz, game, quest,cname,answer,allContestant;

function setup(){
  canvas = createCanvas(850,400);
  db=firebase.database()
  quiz=new Quiz();
  quiz.getState();
  quiz.start()
}


function draw(){
 background("pink");
  //console.log("m draw function")
 
  if(contestantCount===4)
  {
    quiz.result()
  }
 



}
