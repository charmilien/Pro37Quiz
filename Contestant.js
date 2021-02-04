class Contestant 
{
 constructor(){}

 getCount()
 {
     db.ref("contestantCount").on("value",function(data){ contestantCount=data.val()})
     console.log("getCount called")
 }
 
 updateCount(count)
 {
     db.ref('/').update({contestantCount:count})
 }
 updateName(nam,answ)
 {  
      var c='Contestants/Contestant'+ contestantCount
     db.ref(c).set({ Option:answ,Name:nam})
 }
 
 static getInfo(){
    db.ref('Contestants').on("value",(data)=>{
      allContestant = data.val();
    })
  }
 

}