//var katzDeliLine = [];
//var Name;

function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name);
   return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return ('There is nobody waiting to be served!');
} else {
return ('Currently serving ' + katzDeliLine.shift() + '.');
}
}


function currentLine(deliLine) {
var newLine = [];
if (deliLine.length === 0) {
   return "The line is currently empty.";
   }
     for (var i = 0; i < deliLine.length; i++) {
       newLine.push(" " + (i+1) + ". " + deliLine[i]);
     }
       return "The line is currently:" + newLine;
}