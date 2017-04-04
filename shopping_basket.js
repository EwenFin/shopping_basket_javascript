var ShoppingBasket = function(){
  this.contents = [];
}

ShoppingBasket.prototype = {
  addToBasket: function(item) {
    this.contents.push(item)

  }
}


module.exports = ShoppingBasket;
