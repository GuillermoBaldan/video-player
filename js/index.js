const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector('#progress')


$play.addEventListener('click', handlePlay )
$pause.addEventListener('click', handlePause)
$video.addEventListener('loadedmetadata', handleLoaded)
$progress.addEventListener('click', clickDetection)



function handlePlay(){
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le diste click al botón de play')
}
        
function handlePause(){
$video.pause()
$play.hidden = false;
$pause.hidden = true;
console.log('le diste click al botón de pause')
}

$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime -= 10;
    console.log('para atrás 10 segundos')
}

$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime += 10;
    console.log("para adelante 10 segundos")
}



function handleLoaded(){
    $progress.max = $video.duration;
    console.log("Ha cargado mi video")
}

function clickDetection(){
    console.log("Has hecho click en la barra de progreso")
}
