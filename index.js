var katzDeli = [];
var katzDeLine = [];
function takeANumber(katzDeLine,name) {
  katzDeLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeLine.length} in line.`)
  return katzDeLine;
}

var katzDeline = [];
function nowServing(katzDeLine) {
  if ( katzDeLine.length = 0) {
    return "There is nobody waiting to be served!";
  } else {
    var a = katzDeLine.shift();

    return `Currently serving ${a}.`;
  }
  return katzDeline;
}
