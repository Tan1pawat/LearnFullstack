var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = true;
var level = 0;

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var select = "#" + randomChosenColour;
    $(select).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    if (start == false) {
        level += 1;
        var headertext = "Level " + level
        $("h1").text(headertext);
        console.log(userClickedPattern, gamePattern)
    }
}

function playSound(name) {
    var srcsound = "sounds/" + name + ".mp3";
    var sound = new Audio(srcsound);
    sound.play();
}

function animatePress(currentColour) {
    var aniselect = "#" + currentColour;
    $(aniselect).addClass("pressed");
    setTimeout(function () {
        $(aniselect).removeClass("pressed");
    }, 100)
}

function gameover() {
    var headertext = "Game Over, Press Any Key to Restart"
    playSound("wrong");
    $("h1").text(headertext);
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 100)
    gamereset();
}

function gamereset(){
    start = true;
    level = 0;
    gamePattern = [];
}

function checkequal() {
    for (i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] != gamePattern[i]) {
            console.log(userClickedPattern, gamePattern, i)
            gameover();
        }
    }
    if ((userClickedPattern.length == gamePattern.length)) {
        userClickedPattern = [];
        nextSequence()
    }
}

$(".btn").click(function (e) {
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkequal();
});

if (start == true) {
    $(document).keydown(function (e) {
        start = false;
        $("h1").text("Level 0");
        nextSequence()
    });
}
