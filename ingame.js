
let turn_val = 1;   //starting turn is 1 (player 1 -> turn = 1 and player 2 -> turn = 2)

function changeturn(){
    var player = document.getElementById('player_turn');
    turn_val = (turn_val % 2) + 1;
    player.innerHTML = "Turn : Player " + turn_val; //change turn accordingly
    //console.log("next turn: " +turn_val);
}

function generate_num(){    //function to generate numbers between 1 and 6
    var rand = Math.random();
    var num = Math.floor(rand * 6) + 1;
    return num;
}

let dice_set = new Array(); //to store the dice images

for(i = 0; i < 6; i++){ //storing the images' reference links
    dice_set[i] = new Image();
    dice_set[i].src = './Dice_Images/dice_'+(i+1)+'.png';
}
//console.log(dice_set);

function random_image(){    //getting random images for the dices
    var dice1 = document.getElementById("dice_1");
    var dice2 = document.getElementById("dice_2");
    dice1.src = dice_set[generate_num()-1].src;
    dice2.src = dice_set[generate_num()-1].src;
}

const roll_button = document.getElementById("roll");


roll_button.addEventListener("click", function(){

    this.innerHTML = "Rolling";
    this.style.backgroundColor = "darkgreen";
    this.disabled = true; //disable while rolling
    this.style.cursor = "default"; //default cursor

    var player = document.getElementById("player_turn");
    var turn;
    var score; //to store player score
    if(player.innerHTML.includes("1")){   //check whose turn is it
        turn = 1;   //assign the turn
        score = document.getElementById("score_player_one");
    }
    else{
        turn = 2;
        score = document.getElementById("score_player_two"); 
    }

    var dice_shuffle = setInterval(random_image, 75); //start rolling animation

    setTimeout(() => {  //end rolling animation and find the rolled dices
        clearInterval(dice_shuffle);
        var dice1 = document.getElementById("dice_1"); //rolled dice 1
        var dice2 = document.getElementById("dice_2");  //rolled dice 2
        var dice1_val = parseInt(dice1.src.charAt(dice1.src.length - 5)); //dice 1 value
        var dice2_val = parseInt(dice2.src.charAt(dice2.src.length - 5)); //dice 2 value

        console.log(dice1_val, dice2_val);

        if(dice1_val == 1 && dice2_val == 1){   //getting 1 on both dices
            score.innerHTML = 0;
            changeturn();   //change the turn
        }
        else if(dice1.src == dice2.src){    //getting same value on both dices
            score.innerHTML = parseInt(score.innerHTML) + parseInt(dice1_val) * 2;
        }
        else{
            score.innerHTML = parseInt(score.innerHTML) + dice1_val + dice2_val;
            changeturn(); //change the turn
        }

        this.innerHTML = "Roll Dice"; //revert back
        this.style.backgroundColor = "green";
        this.disabled = false;  //re enable the button
        this.style.cursor = "pointer"; //pointer cursor

        if(parseInt(score.innerHTML) >= 100){ //if one player has reached 100 score
            var notification = document.getElementById("result");
            notification.style.display = "block";
            var winner = document.getElementById('winner');
            winner.innerHTML = "Winner is Player " + turn;  //print the winner
            this.disabled = true;   //cannot continue anymore
            this.style.cursor = "default"; //default cursor
        }
    },2000);

});


const try_again_btn = document.getElementById("tryagain");  //try again event
try_again_btn.addEventListener("click", function(){ //try again
    window.location.reload();   
});

const close_btn = document.getElementById("close");

close_btn.addEventListener("click", function(){ //close button event
    var msg_box = this.parentNode.parentNode.parentNode;
    msg_box.style.display = "none";
});

