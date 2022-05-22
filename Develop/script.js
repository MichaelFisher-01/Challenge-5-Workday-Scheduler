//Variables
var rowGen = document.getElementById('timeblocks');
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM',
'3PM', '4PM', '5PM'];
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
var timer = document.getElementById('currentDay');
var hour = moment();


//Scripts to Run:
updater();
console.log(hour);

function updater(){
  setInterval(function(){
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    var timer = document.getElementById('currentDay');
    hour = moment();
    timer.innerText = currentTime;
  },1000);} 

times.forEach (function(item, index, array){
    var divEl = document.createElement('div');
    var divTime = document.createElement('div');
    var divText = document.createElement('textarea');
    var divSave = document.createElement('button');

    divEl.id = "rows";
    divEl.classList.add("row");

    divTime.id = times[index];
    divTime.innerText = item;
    divTime.classList.add("col-md-1");
    divTime.classList.add("timeBlock");
  
    divText.id = times[index] + "text";
    divText.classList.add("col-md-10");
    divText.classList.add("textBlock");

    divSave.id = times[index] + "save";
    divSave.innerText = "Save";
    divSave.classList.add("btn")
    divSave.classList.add('btn-primary')
    divSave.classList.add("col-md-1");
    divSave.classList.add("saveBlock");

    rowGen.appendChild(divEl);
    timeBlock = document.getElementById('rows')
    timeBlock.appendChild(divTime);
    timeBlock.appendChild(divText);
    timeBlock.appendChild(divSave);
})
