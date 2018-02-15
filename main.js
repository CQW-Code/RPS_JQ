    //JQuery project--> new Rock Paper Scissors
    //user makes a selection
    //computer randomly chooses- use Math.Floor(Math.random()* rps.length)
    //Display both user and computer choices on screen
    //Display who the winner is
    //bonus- keep track of wins/losses
    //try coloring win, lose, tie

    //so barely made a budge with this one.  I can get the user click 
    //function to work in jQuery but the result falls through to
    //the last else statement no matter which one I click

    //about as far as I got...:(

    $(document).ready(function()
    {
        
        
   
    
//works now but need to return it back to the HTML part!
    $(".uchoice").on("click", function()
    {
        var user= this.id

        if (user === "rock") 
        {                       
          console.log("Rock")
          
        }
        
        
          else if(user === "paper")
        {
              console.log("Paper")
        }
             
        
          else if (user === "scissors")
         { 
              console.log("Scissors")
         }    
         
        puterChoice()

    })
// now functioning but need to output to HTML.. tonight.

    function puterChoice()  
    {
        var choices = ["Rock", "Paper", "Scissors"]
        var index = Math.floor(Math.random() * 3)
        var div = document.getElementById("puterChoice")

        div.innerHTML = choices[index]
        console.log(choices[index])
    }

})