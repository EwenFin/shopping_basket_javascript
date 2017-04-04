var assert = require("assert");
var ShoppingBasket = require("../shopping_basket.js")

describe("Shopping Basket", function(){
  var shoppingBasket;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket();
  })

  it("should be empty at start", function(){
    assert.strictEqual(0,shoppingBasket.contents.length)
  })

  it("can add items to basket", function(){
    shoppingBasket.addToBasket();
    assert.strictEqual(1,shoppingBasket.contents.length)
  })
  
})
