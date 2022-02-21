const playSound = (Event) =>{
    const button = document.querySelector(`input[data-key ="81" = "${Event.keyCode}"]`);
    const audio = document.querySelector(`input [data-key ="81" = "${Event.keyCode}"]`);
    if(audio)return;
 
    button.classList.add("play");
    audio.currentTime = 0;
    audio.play();
    button.addEventListener("click", (Event)=> play);
    window.addEventListener("keyDown", playSound);
 
}
 console.log();