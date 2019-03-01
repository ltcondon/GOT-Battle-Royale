// Queue landing screen when document has rendered:

// $(document).ready(landingScreen);


// Global variables declared:
var characters = {
    jonSnow: {hp: 100, ap: 50, cp: 100},
    cersei: {hp: 100, ap: 150, cp: 100},
    dany: {hp: 100, ap: 150, cp: 100},
    nightKing: {hp: 100, ap: 50, cp: 100}
}

var charChosen = false;
var oppChosen = false;
var jonSnowChosen = false;
var cerseiChosen = false;
var danyChosen = false;
var nightKingChosen = false;
var gameInitiated = false;
var charID;
var charDetach;
// var dinklage = $('#dinklage');
// var fightTheme = $('#fight-theme')
// Global buttons declared:
$("#main-button").click(characterScreen);


    $(".enemy-button").click(battleScreen);

// function muteAudio() {
//     $('#dinklage').pause();
//     $('#fight-theme').pause();
// };
// muteAudio();
// Primary functions:

    function landingScreen() {
        $('#dinklage').play();
    }


    function characterScreen() {
      $("#large-logo").animate({height: '75px'});
      $('#main-button').fadeOut();
      $("#left-characters").show();
      $("#left-characters").animate({left: '45%'}, 1500)
      $("#right-characters").show();
      $("#right-characters").animate({right: '45%'}, 1500)
      $("#landing-page").animate({"padding-top": "-=4%"}, 200);
      $("#logo-container").animate({"padding-top": "-=4%"}, 200);
      $("#opener ").fadeOut();
      setTimeout(function(){ $('#choose-char').fadeIn() }, 350);
      $(".character-container").click(function(){ 
        if ((!charChosen) && (!gameInitiated)) {
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
                $("#choose-char").fadeOut();
                setTimeout(function(){ $(".character-container").not($(charID)).fadeIn()}, 800);
                setTimeout(function(){ $("#choose-char").text("Choose Your Opponent")}, 500);
                setTimeout(function(){ $("#choose-char").fadeIn('fast')}, 550);
            })
            $(".character-container").click(function(){ 
                if ((!oppChosen) && (!gameInitiated)) {
                    charOpp = $(this);
                    oppChosen = true;
                    battleScreen();
                };
              });
        
        // $(".character-container").not($(charID)).fadeIn();
        // $("#landing-page").append($(".character-container").not($(charID)));
        // 
        // charChoice = characters.jonSnow;
        // defender = cersei;
        // firstBystander = dany;
        // secondBystander = nightKing;
    
    

  
    }
    
    function battleScreen() {
        gameInitiated = true;
      // var detatchCharChoice = 
      $("#landing-page").fadeOut();
      $("#battlefield").fadeIn();
      $(charID, charOpp).animate({width: '200px'});
      $(charID).fadeIn();
      
      if (($(".character-container").attr("id") !== charID) && ($(".character-container").attr("id") !== charOpp)) {
        $(".character-container").appendTo("#bystander-area");
      }
      $(charOpp).appendTo("#defender-area");
      $(charID).appendTo("#player-area");
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
