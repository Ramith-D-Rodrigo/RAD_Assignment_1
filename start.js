const play_button = document.getElementById("play_button");

play_button.addEventListener("click", function(){
    this.style.backgroundColor = "darkgreen";
    setTimeout(() => {  window.open("./ingame.html","_self"); }, 500); //start the game after 0.5 seconds
});