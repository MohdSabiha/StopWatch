let timer;
let isRunning=false;
let seconds=0;

function startstop(){
    if (isRunning){
    clearInterval(timer);
    document.getElementById("startstop").textContent= 'start';
    }else{
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startstop").textContent='stop';
    }
    isRunning =!isRunning;
}

function reset(){
    clearInterval(timer);
    seconds=0;
    updateDisplay();
    document.getElementById('startstop').textContent='start';
    isRunning=false;
}
function updateDisplay(){
    const hours = Math.floor(seconds/3600);
    const min = Math.floor((seconds%3600)/60);
    const sec = seconds % 60;

    const display =` ${String(hours).padStart(2, '0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    document.getElementById('display').textContent= display;

    seconds++;
}

document.getElementById('startstop').addEventListener('click', startstop);
document.getElementById('reset').addEventListener('click', reset);

