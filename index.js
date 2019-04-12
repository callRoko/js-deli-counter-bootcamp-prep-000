function takeANumber(katzDeliLine, otherDeli){
  //name = ["Ada"];
  otherDeli.unshift(katzDeliLine.length)
  return(`Welcome, ${otherDeli}. You are number ${katzDeliLine} in the line.`)
}

function nowServing(katzDeliLine){
  for(i = 1; i < katzDeliLine.length; i++){
    if (katzDeliLine.length > 0){
      return(`Currently serving ${katzDeliLine[i]}.`)
       return katzDeliLine.shift()
    }
    else(katzDeliLine.length < 0){
      return("There is nobody waiting to be served!")
    }
  }
}

function currentLine(){
  
}