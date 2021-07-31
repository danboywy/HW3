//Haojie Zheng
//Haojie_zheng@student.uml.edu
//07/31/2021
function btn1_click(){
  
  //Check number1 between -50 to 50
  var inpObj1 = document.getElementById("fn");
  if (inpObj1.checkValidity() == false) {
    document.getElementById("demo1").innerHTML = inpObj1.validationMessage;
    return false;
  } else {
    document.getElementById("demo1").innerHTML = "GOOD";
  } 


  //Check number2 between -50 to 50
  var inpObj2 = document.getElementById("en1");
  if (inpObj2.checkValidity() == false) {
    document.getElementById("demo2").innerHTML = inpObj2.validationMessage;
    return false;
  } else {
    document.getElementById("demo2").innerHTML = "GOOD";
  } 


  //Check number3 between -50 to 50
  var inpObj3 = document.getElementById("sn");
  if (inpObj3.checkValidity() == false) {
    document.getElementById("demo3").innerHTML = inpObj3.validationMessage;
    return false;
  } else {
    document.getElementById("demo3").innerHTML = "GOOD";
  } 


  //Check number4 between -50 to 50
  var inpObj4 = document.getElementById("en2");
  if (inpObj4.checkValidity() == false) {
    document.getElementById("demo4").innerHTML = inpObj4.validationMessage;
    return false;
  } else {
    document.getElementById("demo4").innerHTML = "GOOD";
  } 

  //Get value from input with decimal only
  var rows=parseInt(document.getElementById('fn').value);
  var cols=parseInt(document.getElementById('sn').value);
  var e1_num = parseInt(document.getElementById("en1").value);
  var e2_num = parseInt(document.getElementById("en2").value);

  //Table
  var body = document.getElementsByTagName('body')[0];
  var table = document.createElement('table');
  table.setAttribute('id', 'newtable');
  var tr = document.createElement('tr');
  var th = document.createElement('th');

  //set first row of first col
  th.appendChild(document.createTextNode(''));
  tr.appendChild(th);
  table.appendChild(tr);

  //Remoce old table
  old_table = document.getElementById('newtable');
  if(old_table){
  old_table.parentNode.removeChild(old_table);

  }
  //Check min and max
  if (rows > e1_num){
    document.getElementById("demo5").innerHTML = "The minimum row cannot be greater than or equal to the maximum row";
    return false;
  }
  else if (cols > e2_num){
    document.getElementById("demo5").innerHTML = "The minimum column cannot be greater than or equal to the maximum column";
    return false;
  }
  else{
    document.getElementById("demo5").innerHTML = "Multiplication Table";
  }

  //Create column header
  for (var i = cols; i <= e2_num; i++) {
    tr.appendChild(tablebox(i, 'th'));
  }

  //Create row header
  for (var j = rows; j <= e1_num; j++) {
    
    var tr = document.createElement('tr');
    tr.appendChild(tablebox(j, 'th'));
    for (var i = cols; i <= e2_num; i++) {
      //Calculate the output
      var value = j * i;
      tr.appendChild(tablebox(value, 'td'));
    }
    table.appendChild(tr);
  }
    body.appendChild(table);
}

//Create box
function tablebox(text, type) {
  var space = document.createElement(type);
  space.appendChild(document.createTextNode(text));
  return space;
}