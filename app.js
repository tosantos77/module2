(function(){
  'use strict';

  var list =  [
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Chicken Wings",
      quantity: "5"
    },
    {
      name: "Coca-Cola",
      quantity: "2"
    },
    {
      name: "Big Mac",
      quantity: "10"
    },
    {
      name: "Roast Chicken",
      quantity: "3"
    }
  ];



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var ToBuyList = this;

  ToBuyList.items = ShoppingListCheckOffService.getBuyList();

  ToBuyList.BoughtItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  ToBuyList.valueOfBuyList = function(arrayList){
    if(ToBuyList.items.length <= 0){
      return true;
    }else{
      return false;
    }
  };
}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var BougthList = this;

  BougthList.items = ShoppingListCheckOffService.getBoughtList();

  BougthList.getValueOfBougthList = function(){
    if(BougthList.items.length !== 0){
        return false;
    }else{
        return true;
    }
  };
}



function ShoppingListCheckOffService(){
  var service = this;

  var ToBuyList = list;
  var BoughtList = [];


  service.getBuyList = function(){
    return ToBuyList;
  };

  service.buyItem = function(itemIndex){

    var itemBought = {
      name: ToBuyList[itemIndex].name,
      quantity: ToBuyList[itemIndex].quantity
    };

    ToBuyList.splice(itemIndex, 1);
    BoughtList.push(itemBought);
  };

  service.getBoughtList = function(){
    return BoughtList;
  };
}

})();
