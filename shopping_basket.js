var ShoppingBasket = function(){
  this.contents = [];
}

ShoppingBasket.prototype = {

  addToBasket: function(item) {
    this.contents.push(item)
  },

  removeFromBasket: function(item){
    var itemIndex = this.contents.indexOf(item)
    if (itemIndex > -1){
      this.contents.splice(itemIndex, 1);
    }
  },

  getTotalPrice: function() {
    var totalPrice = 0;
    for(var i=0; i < this.contents.length; i++){
      totalPrice = totalPrice + this.contents[i].price;
    }
    return totalPrice;
  }

}

module.exports = ShoppingBasket;
