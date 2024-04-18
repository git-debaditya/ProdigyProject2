// Convert time to a format of hours, minutes, seconds, and milliseconds
function timetoString(time)
{
  let diffInHrs = time/3600000;            // 1hour = 3600000ms
  let hh = Math.floor(diffInHrs);         //rounds up to the greatest lower int

  let diffInMins = (diffInHrs-hh)*60;    //subtracts hh from diffInHrs to get minutes
  let mm = Math.floor(diffInMins);      //gives minutes
  
  let diffInSec = (diffInMins-mm)*60;    //subtracts mm from diffInMins to get seconds
  let ss = Math.floor(diffInSec);       //gives seconds
  
  let diffInMs = (diffInSec-ss)*100;    //subtracts ss from diffInSec to get miliseconds
  let ms = Math.floor(diffInMs);        //gives miliseconds
  //diffInMs will always be anywhere between 0 and 999. If we want to display them in 3 digits we can multiply by 1000 instead of 100 

  //gives o/p in the format: 00:00:00 using padStart()
  /*let formattedHH = hh.toString().padStart(2,'0');*/
  let formattedMM = mm.toString().padStart(2,'0');
  let formattedSS = ss.toString().padStart(2,'0');
  let formattedMS = ms.toString().padStart(2,'0');
  
  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

/**************************CONTROLS******************************/

// Declare variables to use in our functions below

let startTime;             //initially at 00:00:00. If paused: sT=Date.now()-eT
let elapsedTime = 0;      //current time - startTime
let timerInterval;       //stores the value retrieved from elapsedTime to make the pause() work.
let lastLapTime = 0;    //keeps track of the elapsed time when the lap button was last clicked

// To display the result in the div.timer containing "00:00:00"

function print(txt)
{
  document.getElementById('timer').innerHTML = (txt);   //innerHTML property: to modify the HTML on the page [innerHTML]
}
/***********************************************************************/

//create start(), pause() & reset() functions

function start()
{
  startTime = Date.now() - elapsedTime;   //subtracts whatever value held by eT

  //every 1ms setInterval is called which calculates the elapsed time since the startTime, converts it into a string, stores it in elapsedTime and sends it to the div.timer with "timer" ID
  timerInterval = setInterval(function showTime()
    {
      elapsedTime = Date.now()-startTime;
      print(timetoString(elapsedTime));
    },1);
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
} //EoF 

function pause()
{
  clearInterval(timerInterval);
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
} //EoF

function reset()
{
  clearInterval(timerInterval);
  print('00:00:00');
  elapsedTime = 0;
  lastLapTime = 0;    //resets lastLapTime
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';

  //clear lap times
  let lapCounterDiv = document.getElementById('lapcounter');
  while(lapCounterDiv.firstChild)
  {
    lapCounterDiv.removeChild(lapCounterDiv.firstChild);
  }
} //EoF

function lap()
{
  let lapTime = elapsedTime - lastLapTime;
  let lapNumber = document.getElementById('lapcounter').children.length + 1;

  let lapDiv = document.createElement('div');
  lapDiv.textContent = `#${lapNumber}\t${timetoString(lapTime)}\t${timetoString(elapsedTime)}`;

  document.getElementById('lapcounter').appendChild(lapDiv);

  lastLapTime = elapsedTime;  // updates the lastLapTime to the current elapsedTime

  if(!startTime)
  {
    start();
  }
}
/***********************************************************************/

//create event listeners

let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('stopBtn');
let rstBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
rstBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap)
// Convert time to a format of hours, minutes, seconds, and milliseconds
function timetoString(time)
{
  let diffInHrs = time/3600000;            // 1hour = 3600000ms
  let hh = Math.floor(diffInHrs);         //rounds up to the greatest lower int

  let diffInMins = (diffInHrs-hh)*60;    //subtracts hh from diffInHrs to get minutes
  let mm = Math.floor(diffInMins);      //gives minutes
  
  let diffInSec = (diffInMins-mm)*60;    //subtracts mm from diffInMins to get seconds
  let ss = Math.floor(diffInSec);       //gives seconds
  
  let diffInMs = (diffInSec-ss)*100;    //subtracts ss from diffInSec to get miliseconds
  let ms = Math.floor(diffInMs);        //gives miliseconds
  //diffInMs will always be anywhere between 0 and 999. If we want to display them in 3 digits we can multiply by 1000 instead of 100 

  //gives o/p in the format: 00:00:00 using padStart()
  /*let formattedHH = hh.toString().padStart(2,'0');*/
  let formattedMM = mm.toString().padStart(2,'0');
  let formattedSS = ss.toString().padStart(2,'0');
  let formattedMS = ms.toString().padStart(2,'0');
  
  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

/**************************CONTROLS******************************/

// Declare variables to use in our functions below

let startTime;             //initially at 00:00:00. If paused: sT=Date.now()-eT
let elapsedTime = 0;      //current time - startTime
let timerInterval;       //stores the value retrieved from elapsedTime to make the pause() work.
let lastLapTime = 0;    //keeps track of the elapsed time when the lap button was last clicked

// To display the result in the div.timer containing "00:00:00"

function print(txt)
{
  document.getElementById('timer').innerHTML = (txt);   //innerHTML property: to modify the HTML on the page [innerHTML]
}
/***********************************************************************/

//create start(), pause() & reset() functions

function start()
{
  startTime = Date.now() - elapsedTime;   //subtracts whatever value held by eT

  //every 1ms setInterval is called which calculates the elapsed time since the startTime, converts it into a string, stores it in elapsedTime and sends it to the div.timer with "timer" ID
  timerInterval = setInterval(function showTime()
    {
      elapsedTime = Date.now()-startTime;
      print(timetoString(elapsedTime));
    },1);
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
} //EoF 

function pause()
{
  clearInterval(timerInterval);
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
} //EoF

function reset()
{
  clearInterval(timerInterval);
  print('00:00:00');
  elapsedTime = 0;
  lastLapTime = 0;    //resets lastLapTime
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';

  //clear lap times
  let lapCounterDiv = document.getElementById('lapcounter');
  while(lapCounterDiv.firstChild)
  {
    lapCounterDiv.removeChild(lapCounterDiv.firstChild);
  }
} //EoF

function lap()
{
  let lapTime = elapsedTime - lastLapTime;
  let lapNumber = document.getElementById('lapcounter').children.length + 1;

  let lapDiv = document.createElement('div');
  lapDiv.textContent = `#${lapNumber}\t${timetoString(lapTime)}\t${timetoString(elapsedTime)}`;

  document.getElementById('lapcounter').appendChild(lapDiv);

  lastLapTime = elapsedTime;  // updates the lastLapTime to the current elapsedTime

  if(!startTime)
  {
    start();
  }
}
/***********************************************************************/

//create event listeners

let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('stopBtn');
let rstBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
rstBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap)