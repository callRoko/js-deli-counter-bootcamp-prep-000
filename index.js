function takeANumber(katzDeliLine, otherDeli){
  //name = ["Ada"];
  otherDeli.unshift(katzDeliLine.length)
  return(`Welcome, ${otherDeli}. You are number ${katzDeliLine} in the line.`)
}