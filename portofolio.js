
var mainHeight = document.getElementById('welcome-section').clientHeight;
var mainWidth = document.getElementById('welcome-section').clientWidth;
var mainCircle = document.getElementById('circle');

function fadeIn(element) {
    var op = 0;
    var timer = setTimeout(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        mainCircle.style.opacity = op;
        op += 0.9;
    }, 3000);
}

function fadeOutAndCallback(element, callback){
    var opacity = 1;
    var timer = setTimeout(function(){
        if(opacity <= 0){
            clearInterval(timer);
            callback();
        }
        mainCircle.style.opacity = opacity;
        opacity -=  0.9;
    }, 1000);
}

function circleAppear() {

    mainCircle.style.top = Math.floor(Math.random()*500) + 'px';

    mainCircle.style.left = Math.floor(Math.random()*1300) + 'px';

    fadeOutAndCallback(mainCircle, fadeIn(mainCircle));
}

let timerId = setInterval(circleAppear, 4000);

/*
function circleDisappear() {
    mainCircle.opacity = 1;
}

mainCircle.opacity = 0;

let timerId = setTimeout(function tick() {
    circleAppear();
    timerId = setTimeout(function() {
        circleDisappear;
        tick();
    }, 4000);// (*)
}, 4000);
*/