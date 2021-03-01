
var now = new Date();
var hours = now.getHours();

document.bgColor="#210E0B";
//18-19 night
if (hours > 17 && hours < 20){
 document.write ('<body style="background-color: #412623">');
}
//20-21 night
else if (hours > 19 && hours < 22){
 document.write ('<body style="background-color: #7D5239">');
}
//22-4 night
else if (hours > 21 || hours < 5){
 document.write ('<body style="background-color: #A17F5F">');
}
//9-17 day
else if (hours > 8 && hours < 18){
 document.write ('<body style="background-color: #210E0B">');
}
//7-8 day
else if (hours > 6 && hours < 9){
 document.write ('<body style="background-color: #69554C">');
}
//5-6 day
else if (hours > 4 && hours < 7){
 document.write ('<body style="background-color: #988268">');
}
else {
 document.write ('<body style="background-color: #210E0B">');
}