

// function animateCSS(element, animationName, callback) {
//     const node = document.querySelector(element)
//     node.classList.add('animated', animationName)

//     function handleAnimationEnd() {
//         node.classList.remove('animated', animationName)
//         node.removeEventListener('animationend', handleAnimationEnd)

//         if (typeof callback === 'function') callback()
//     }

//     node.addEventListener('animationend', handleAnimationEnd)
// }

var jonSnow = {
    hp: 100,
    ap: 50,
    cp: 100
};

var cersei = {
    hp: 100,
    ap: 150,
    cp: 100
};

var dany = {
    hp: 100,
    ap: 150,
    cp: 100
};


    $("#main-button").on("click", function(){
      $("#large-logo").animate({height: '75px'});
      $('#main-button').fadeOut();
      $("#left-characters").show();
      $("#left-characters").animate({left: '45%'}, 1500)
      $("#right-characters").show();
      $("#right-characters").animate({right: '45%'}, 1500)
      $("#landing-page").animate({"padding-top": "-=4%"}, 200);
      $("#opener ").fadeOut();
      setTimeout(function(){ $('#choose-char').fadeIn() }, 350);
    });

    $("#jonSnow").on("click", function() {
        $("#jonSnow").addClass('animated bounce').one('animationend', chooseJon());
    });

    function chooseJohn() {
        var charChoice = jonSnow;
        var defender = cersei;
        var firstBystander = dany;
        var secondBystander = nightKing;

        var detatchCharChoice = 
        $("#landing-page").fadeOut();
        $("#cersei").appendTo()
    }
