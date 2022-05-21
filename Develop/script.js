var rowGen = document.getElementById('timeblocks');
var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM',
'3PM', '4PM', '5PM'];

times.forEach (function(item, index, array){
    var divEl = document.createElement('div');
    var divEl1 = document.createElement('div');
    var divEl2 = document.createElement('div');
    var divEl3 = document.createElement('div');

    divEl.id = "rows";
    divEl.classList.add("row");

    divEl1.id = times[index];
    divEl1.innerText = item;
    divEl1.classList.add("col-md-1");
    divEl1.classList.add("timeBlock");
    

    divEl2.id = times[index];
    divEl2.innerText = "Text";
    divEl2.classList.add("col-md-10");
    divEl2.classList.add("textBlock");
  

    divEl3.id = times[index]
    divEl3.innerText = "Save";
    divEl3.classList.add("col-md-1");
    divEl3.classList.add("saveBlock");
    
    console.log(divEl1);
    console.log(divEl2);
    console.log(divEl3);
    rowGen.appendChild(divEl);
    timeBlock = document.getElementById('rows')
    timeBlock.appendChild(divEl1);
    timeBlock.appendChild(divEl2);
    timeBlock.appendChild(divEl3);
})
