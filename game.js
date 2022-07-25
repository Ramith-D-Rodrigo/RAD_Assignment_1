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
function roll_dice(){
    var button = document.getElementById('roll');
    button.innerHTML = "Rolling";
    button.style.backgroundColor = "darkgreen";
    var dice1 = document.getElementById('dice_1');
    var dice2 = document.getElementById('dice_2');

}
let dice_set = new Array(); //to store the dice images

for(i = 0; i < 6; i++){ //storing the images
    dice_set[i] = new Image();
    dice_set[i].src = './Dice_Images/dice_'+toString(i+1)+'.png';
}


