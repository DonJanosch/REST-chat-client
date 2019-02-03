var {IdCalculator} = require('./IdCalculator');

var idCalculator = new IdCalculator();

function Item() {
  if (!(this instanceof Item)){
    return new Item();
  }
  var id = 0; // TODO: ID-Generator schreiben
  var description = '';
  var name = '';
  var price = 0;
  var amount = 0;

  function getDescription(){
    return this.description;
  }

  function setDescription(description){
    if (!type(description)==='string' || description.length === 0){
      return 'Error noch einfügen' // TODO: Error-Handling machen
    }
    this.description = description;
  }

  function getName(){
    return this.name;
  }

  function setName(name){
    if (!type(name)==='string' || name.length === 0){
      return 'Error noch einfügen' // TODO: Error-Handling machen
    }
    this.name = name;
  }
}

function getPrice(){
  return this.price;
}

function setPrice(price){
  if (!type(price)==='string' || price.length === 0){
    return 'Error noch einfügen' // TODO: Error-Handling machen
  }
  this.price = price;
}

function getAmount(){
  return this.amount;
}

function setAmount(amount){
  if (!type(amount)==='string' || amount.length === 0){
    return 'Error noch einfügen' // TODO: Error-Handling machen
  }
  this.amount = amount;
}

function getId(){
  return this.id;
}

function equals(item){
  if (item instanceof Item ){
    console.log(`Compare of ${this.name} failed: Objects not of same type.`);
    return false;
  }
  if (item.description === this.description
    && item.id === this. id
    && item.name === this. name
    && item.price === this. price
    && item.amount === this. amount
  ){
    return true;
  }
      console.log(`Compare of ${this.name} failed: values dont match.`);
      return false;
}

module.exports = {Item}
