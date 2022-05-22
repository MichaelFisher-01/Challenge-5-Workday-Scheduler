//Global Variables
var rowGen = document.getElementById('timeblocks');
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM',
'3PM', '4PM', '5PM'];
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
var timer = document.getElementById('currentDay');
var hour = moment().get('hour');

//Page Load
updater();
chartSetup();
colorCheck();
console.log(hour);

// Functions
//This function will display and update the time under the header every second.
function updater(){
  setInterval(function(){
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    var timer = document.getElementById('currentDay');
    hour = moment().get('hour');
    timer.innerText = currentTime;
  },1000);} 
// This function will generate and oragnize a div a text area and button for each time.
function chartSetup (){
  //Using for each we can change what hours are included ata any time by updating the times array.
  times.forEach (function(item, index, array){ 
    //This section setups up all needed variables specific to this function.
      var divEl = document.createElement('div');
      var divTime = document.createElement('div');
      var divText = document.createElement('textarea');
      var divSave = document.createElement('button');
    //This section creates a new row for each time.
      divEl.id = "rows" + index;
      divEl.classList.add("row");
    // This sections creates the 1st column that shows the time.
      divTime.id = item + "slot";
      divTime.innerText = item; 
      divTime.classList.add("col-md-1"); 
      divTime.classList.add("timeBlock");
    //This section creates the text area the user can type in.
      divText.id = item;
      divText.classList.add("col-md-10");
      divText.classList.add("textBlock");
    // THis section creates the save button in the third column.
      divSave.id = item + "save";
      divSave.innerText = "Save";
      divSave.classList.add("btn")
      divSave.classList.add('btn-primary')
      divSave.classList.add("col-md-1");
      divSave.classList.add("saveBlock");
    // After creating each element we post them to the page.
      rowGen.appendChild(divEl);
      timeBlock = document.getElementById('rows' + index)
      timeBlock.appendChild(divTime);
      timeBlock.appendChild(divText);
      timeBlock.appendChild(divSave);
      // This makes it so each button can be clicked.
      document.getElementById(item+"save").addEventListener("click",saveData);
  })
}

function colorCheck() {
  // This function will update the color coordination of the page depending on what time is it.
  var color = document.getElementById("9AM");
  switch (hour) {
    case 9:
      color = document.getElementById("9AM"); 
      //Sets the current time to red.
      color.classList.add('present');
      //Sets all times after the current to green.
      for (i = 1; i<8; i++){ 
        color = document.getElementById(times[i]);
        color.classList.add('future');
      } 
    break;
    
    case 10:
      color = document.getElementById('10AM'); 
      color.classList.add('present');
      //Sets all times before current to gray.
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

function saveData (event) {
  event.preventDefault();
  console.log(event);
}



