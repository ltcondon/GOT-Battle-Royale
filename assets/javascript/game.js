// Queue landing screen when document has rendered:

// $(document).ready(landingScreen);
// function landingScreen()

// Global variables declared:
var characters = {
    jonSnow: {hp: 100, ap: 50, cp: 100},
    cersei: {hp: 100, ap: 150, cp: 100},
    dany: {hp: 100, ap: 150, cp: 100},
    nightKing: {hp: 100, ap: 50, cp: 100}
}

var charChosen = false;
var opponentChosen = false;
var jonSnowChosen = false;
var cerseiChosen = false;
var danyChosen = false;
var nightKingChosen = false;
var gameInitiated = false;
var charID;
var charDetach;
// Global buttons declared:
$("#main-button").click(characterScreen);


    $(".enemy-button").click(battleScreen);

// Primary functions:



    function characterScreen() {
      $("#large-logo").animate({height: '75px'});
      $('#main-button').fadeOut();
      $("#left-characters").show();
      $("#left-characters").animate({left: '45%'}, 1500)
      $("#right-characters").show();
      $("#right-characters").animate({right: '45%'}, 1500)
      $("#landing-page").animate({"padding-top": "-=4%"}, 200);
      $("#opener ").fadeOut();
      setTimeout(function(){ $('#choose-char').fadeIn() }, 350);
      $(".character-container").click(function(){ 
        if (!charChosen) {
            charID = $(this)
            charChosen = true;
            opponentScreen();
        };
      });
    };


    function opponentScreen() {
        $(".character-container").not($(charID)).fadeOut('fast'); // fade out every other div
            $(charID).addClass('animated bounce').one('animationend', function() {
                $(charID).fadeOut();
                $("#last.word").fadeOut();
                setTimeout(function(){ $(".character-container").not($(charID)).fadeIn()}, 500);
                setTimeout(function(){ $("#last-word").text("Opponent")}, 100);
            })
        
        // $(".character-container").not($(charID)).fadeIn();
        // $("#landing-page").append($(".character-container").not($(charID)));
        // 
        // charChoice = characters.jonSnow;
        // defender = cersei;
        // firstBystander = dany;
        // secondBystander = nightKing;
    
    

  
    }
    
    function battleScreen() {
      // var detatchCharChoice = 
      $("#landing-page").fadeOut();
      $("#battlefield").fadeIn();
      $("#cersei").appendTo("#defender-area");
      $("#dany").appendTo("#first-bystander");
      $("#nightKing").appendTo("#second-bystander");
      $("#jonSnow").appendTo("#player-area");
      $("#attack-button").fadeIn();
      $("#vs").fadeIn();
      // $("#player-stats").append(")
    }

    
        // $("#jonSnow").addClass('animated bounce').one('animationend', function(){
        //     // if ((!jonSnowChosen) && (!gameInitiated)) {
        //     //     var charChoice = jonSnow;
        //     // var defender = cersei;
        //     // var firstBystander = dany;
        //     // var secondBystander = nightKing;
        //     // }


            
        // });

    // function chooseJohn() {
    // }
