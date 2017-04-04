var assert = require("assert");
var Item = require("../item.js");
var ShoppingBasket = require("../shopping_basket.js");

describe("Shopping Basket", function(){

  var shoppingBasket;
  var item1;
  var item2;
  var item3;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket();
    item1 = new Item("Milk" , 100 , false);
    item2 = new Item("Beer", 500 , false );
    item3 = new Item("Cookies" , 200, true );

  })

  it("Basket should be empty at start", function(){
    assert.strictEqual(0,shoppingBasket.contents.length)
  })

  it("Item can add items to basket", function(){
    shoppingBasket.addToBasket(item1);
    assert.strictEqual(1,shoppingBasket.contents.length)
  })

  it("Basket can have multiple Items", function(){
    shoppingBasket.addToBasket(item1);
    shoppingBasket.addToBasket(item2);
    shoppingBasket.addToBasket(item3);
    assert.strictEqual(3,shoppingBasket.contents.length)

  })

  it("Can remove items from basket", function(){
    shoppingBasket.addToBasket(item1);
    shoppingBasket.addToBasket(item2);
    shoppingBasket.removeFromBasket(item1);
    assert.strictEqual(1,shoppingBasket.contents.length)
  })

})
