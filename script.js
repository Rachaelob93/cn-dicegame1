 
document.querySelectorAll(".btn")[0].addEventListener("click", () => {
    let i = Math.floor((Math.random() * 6) + 1);
    let dice = document.getElementsByClassName("dice-img");
    let score = document.querySelectorAll(".score");
    dice[0].src = `./img/dice${i}.png`;

    score[0].innerHTML = +score[0].innerHTML + +i;

    if(i != "1" && score[0].innerHTML < 20){
        return score[0].innerHTML;

    }else if(i != "1" && score[0].innerHTML >= 20){
        score[0].innerHTML = "Winner";
        document.querySelectorAll(".btn")[0].innerHTML = "Start Over";
        document.querySelectorAll(".btn")[0].addEventListener("click", ()=> {
            location.reload();
        });  
    }else{
        score[0].innerHTML = "Lose!"
        document.querySelectorAll(".btn")[0].innerHTML = "Start Over"
        document.querySelectorAll(".btn")[0].addEventListener("click", ()=> {
            location.reload();
        });
    };
});

  