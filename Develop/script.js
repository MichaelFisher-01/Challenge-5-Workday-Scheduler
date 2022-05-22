//Variables
var rowGen = document.getElementById('timeblocks');
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM',
'3PM', '4PM', '5PM'];
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
var timer = document.getElementById('currentDay');
var hour = 18;
//Page Load
updater();
chartSetup();
colorCheck();
console.log(hour);
// Functions
function updater(){
  setInterval(function(){
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    var timer = document.getElementById('currentDay');
    hour = moment().get('hour');
    timer.innerText = currentTime;
  },1000);} 

function chartSetup (){
  times.forEach (function(item, index, array){
      var divEl = document.createElement('div');
      var divTime = document.createElement('div');
      var divText = document.createElement('textarea');
      var divSave = document.createElement('button');

      divEl.id = "rows" + index;
      divEl.classList.add("row");

      divTime.id = item + "slot";
      divTime.innerText = item;
      divTime.classList.add("col-md-1");
      divTime.classList.add("timeBlock");
    
      divText.id = item;
      divText.classList.add("col-md-10");
      divText.classList.add("textBlock");

      divSave.id = item + "save";
      divSave.innerText = "Save";
      divSave.classList.add("btn")
      divSave.classList.add('btn-primary')
      divSave.classList.add("col-md-1");
      divSave.classList.add("saveBlock");

      rowGen.appendChild(divEl);
      timeBlock = document.getElementById('rows' + index)
      timeBlock.appendChild(divTime);
      timeBlock.appendChild(divText);
      timeBlock.appendChild(divSave);
  })
}
function colorCheck() {
  var color = document.getElementById("9AM");
  switch (hour) {
    case 9:
      color = document.getElementById("9AM");
      color.classList.add('present');
      for (i = 1; i<8; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 10:
      color = document.getElementById('10AM');
      color.classList.add('present');
      for (i = 0; i<1; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 2; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 11:
      color = document.getElementById('11AM');
      color.classList.add('present');
      for (i = 0; i<2; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 3; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 12:
      color = document.getElementById('12PM');
      color.classList.add('present');
      for (i = 0; i<3; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 4; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 13:
      color = document.getElementById('1PM');
      color.classList.add('present');
      for (i = 0; i<4; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 5; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 14:
      color = document.getElementById('2PM');
      color.classList.add('present');
      for (i = 0; i<5; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 6; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 15:
      color = document.getElementById('3PM');
      color.classList.add('present');
      for (i = 0; i<6; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 7; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 16:
      color = document.getElementById('4PM');
      color.classList.add('present');
      for (i = 0; i<7; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
      for (i = 8; i<9; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      }
    break;
    
    case 17:
      color = document.getElementById('5PM');
      color.classList.add('present');
      for (i = 0; i<8; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('past');
      }
    break;
  default:
    for (i = 0; i<9; i++){ 
      color = document.getElementById(times[i]);
      color.classList.add('past');
    }
    var ooh = document.createElement('h1')
    ooh.innerText = "It is currently out of office hours!";
    var alert = document.getElementById('jumbo');
    alert.appendChild(ooh);
  }
}