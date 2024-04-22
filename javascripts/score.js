team1Score = document.getElementById("team1Score");
team2Score = document.getElementById("team2Score");
winningScore = document.getElementById("winningScore");

team1Score.value = 0;
team2Score.value = 0;

function checkWinner(){

    if (winningScore.value === team1Score.value){
        alert("TEAM 1 WINS!!!");
        team1Score.value = 0;
        team2Score.value = 0;
    }
    else if (winningScore.value === team2Score.value){
        alert("TEAM 2 WINS!!!");
        team1Score.value = 0;
        team2Score.value = 0;
    }
}

function addScore1 (){
    team1Score.value++;
    checkWinner();
}
function addScore2 (){
    team2Score.value++;
    checkWinner();
}
function reset(){
    team1Score.value = 0;
    team2Score.value = 0;
}
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
