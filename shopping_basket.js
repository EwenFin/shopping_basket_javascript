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
  }

}


module.exports = ShoppingBasket;
