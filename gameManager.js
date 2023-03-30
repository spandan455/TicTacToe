let activePlayer = "human"
tiles = document.querySelectorAll('.block')


function switchPlayer(){
    if (activePlayer == "human"){
        activePlayer = "ai"
    }
    else{
        activePlayer = "human"
    }
}

function clicked(element){
    if (activePlayer == "human"){
        element.style.backgroundImage = "url('/images/o.svg')"
        switchPlayer()
    }
}

tiles.forEach(i => {
    i.addEventListener("click", clicked(i));  
});