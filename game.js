

let player = document.getElementById('player');
let obstacle = document.getElementById('obstacle');


//pulo
function jump(){ 
    if(player.classList != 'jump'){
        player.classList.add('jump')
}

    setTimeout(function(){ 
        player.classList.remove('jump')
    }, 800)
}


//Colisão
let colision = setInterval(function(){

    let playertop = parseInt(
        window.getComputedStyle(player).getPropertyValue('top')
    )

    let leftobstacle = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue('left')
    )


    if(leftobstacle < 160 && leftobstacle > 0 && playertop >= 300){
        obstacle.style.animation = 'none'
        obstacle.style.display = 'none'

        let fail = document.getElementById('retry')
        fail.innerHTML = 'Click here to start' 
    }
}, 10)


function retrygame(){
    Location.reload()
}

