function IdCalculator(){
  IdCalculator.a = 1;
  if( typeof IdCalculator.counter == 'undefined'){
    IdCalculator.counter = 0;
  }
}

IdCalculator.getId = function (){
  IdCalculator.counter += 1;
  return IdCalculator.counter;
}

module.exports = {IdCalculator}
