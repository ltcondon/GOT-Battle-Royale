$(document).ready(function(){

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


    // $("#jonSnow").attr("data", JSON.stringify(jonSnow));
    // $("#cersei").attr("data", JSON.stringify(cersei));
    // $("#cersei").attr("data", JSON.stringify(dany));

    $("#jonSnow").on("click", function() {
        animateCSS(this, 'bounce', function() {
            // Do something after animation
          })
        var charChoice = jonSnow;
        var firstEnemy = cersei;
        var secondEnemy = dany;
        console.log(charChoice);
        // $("#cersei").html("#defender-area")
        // $("#dany").html("bystander")
        
    })


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


});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

// animateCSS('.my-element', 'bounce', function() {
//     // Do something after animation
//   })