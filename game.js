function play_button(){
    var btn = document.getElementById('play_button');
    btn.style.backgroundColor = "darkgreen";
    setTimeout(() => {  window.open("./ingame.html","_self"); }, 500); //start the game after 1second
}

let turn_val = 1;   //starting turn (player 1 -> turn = 1 and player 2 -> turn = 2)

function turn(){
    var player = document.getElementById('player_turn');
    var new_turn = (turn_val % 2) + 1;
    player.innerHTML = "Turn : Player " + new_turn; //change turn accordingly
    turn_val++;
}

