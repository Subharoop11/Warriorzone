 var audio = new Audio('audio.mp3');


cross = true;

score = 0; 


// To press any key and get its Key.

document.onkeydown = function (e) {
    console.log("Key is ", e.keyCode);
    let a = e.keyCode;
    if (a == 38) {
        audio.play();
        soldier = document.querySelector('.soldier');
        soldier.classList.add('animatesoldierup');
        setTimeout(() => {
            soldier.classList.remove('animatesoldierup');
        }, 700);

    }
    if (a == 39) {
        audio.play();
        soldier = document.querySelector('.soldier');
        soldierX = parseInt(window.getComputedStyle(soldier, null).getPropertyValue('left'));
        soldier.style.left = soldierX + 112 + "px";
    }

    if (a == 37) {
        audio.play();
        soldier = document.querySelector('.soldier');
        soldierX = parseInt(window.getComputedStyle(soldier, null).getPropertyValue('left'));
        soldier.style.left = (soldierX - 112) + "px";
    }

}

setInterval(() => {
    soldier = document.querySelector('.soldier');
    gameOver = document.querySelector('.gameOver');
    spartan = document.querySelector('.spartan');
    header = document.querySelector('.header');

    // sox and soy values come in pixel so we have to make it integer first then we can do further calculations in it.
    // sox and soy are computed values at instantaneous time.
    sox = parseInt(window.getComputedStyle(soldier, null).getPropertyValue('left'));
    soy = parseInt(window.getComputedStyle(soldier, null).getPropertyValue('top'));
    spx = parseInt(window.getComputedStyle(spartan, null).getPropertyValue('left'));
    spy = parseInt(window.getComputedStyle(spartan, null).getPropertyValue('top'));

    offsetX = Math.abs(sox - spx);
    offsetY = Math.abs(soy - spy);

   

    if (offsetX <73 && offsetY < 52) {
        
       audio.pause();
        gameOver.style.visibility = 'visible';
        spartan.classList.remove('animatespartan');
        // header.style.visibility = 'hidden';

        
    }
    else if(offsetX<145 && cross){
        
        score+=1;
    
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            animationduration = parseFloat(window.getComputedStyle(spartan, null).getPropertyValue('animation-duration'));
            newduration = animationduration-0.1;
            spartan.style.animationDuration = newduration + 's';
            console.log("NEw duration is " + newduration);
        }, 1000);
      
    }

}, 10);

function updatescore(score){
     scorecount = document.querySelector('.scorecount');
     
     scorecount.innerHTML = "Your score : " + score;
}


