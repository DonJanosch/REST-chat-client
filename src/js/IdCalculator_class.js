class IdCalculator{
  this.counter = 0;
  static getId(){
    this.counter += 1;
    return this.counter;
  }
}

// var idCalculator = new IdCalculator();

module.exports = {IdCalculator}
