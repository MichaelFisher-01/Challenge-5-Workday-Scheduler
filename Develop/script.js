var rowGen = document.getElementById('timeblocks');
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM',
'3PM', '4PM', '5PM'];

times.forEach (function(item, index, array){
    var divEl = document.createElement('div');
    var divEl1 = document.createElement('div');
    var textEl = document.createElement('textarea');
    var divEl3 = document.createElement('div');

    divEl.id = "rows";
    divEl.classList.add("row");

    divEl1.id = times[index];
    divEl1.innerText = item;
    divEl1.classList.add("col-md-1");
    divEl1.classList.add("timeBlock");
    

    textEl.id = times[index] + "text";
    textEl.classList.add("col-md-10");
    textEl.classList.add("textBlock");
  

    divEl3.id = times[index] + "save";
    divEl3.innerText = "Save";
    divEl3.classList.add("col-md-1");
    divEl3.classList.add("saveBlock");
    
    rowGen.appendChild(divEl);
    timeBlock = document.getElementById('rows')
    timeBlock.appendChild(divEl1);
    timeBlock.appendChild(textEl);
    timeBlock.appendChild(divEl3);
})
