/**
 * Created by rajendrak on 11/20/2016.
 */
(function(){
    angular.module("ShoppingList",[])
        .controller("ToBuyController",ToBuyController)
        .controller("AlreadyBoughtController",AlreadyBoughtController)
        .service("ShoppingListService",ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService){
        var buyController = this;
        buyController.availableItemsToBuy = [
                                                {name:'Cookie',quantity:10},
                                                {name:'Chips',quantity:7},
                                                {name:'Apple',quantity:15},
                                                {name:'Cherry',quantity:20},
                                                {name:'Pineapple',quantity:5}
                                            ];
        buyController.buyItem = function (index){
            ShoppingListService.buyItem(buyController.availableItemsToBuy,index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController (ShoppingListService){
        var alreadyBoughtController = this;
        alreadyBoughtController.boughtItems = ShoppingListService.showBoughtItems();

    }

    function ShoppingListService(){
        var service = this;
        var alreadyBoughtItems = [];
        service.buyItem = function (availableItemsToBuy,index){
            var boughtItem = availableItemsToBuy.splice(index,1);
            alreadyBoughtItems.push(boughtItem[0]);
        }
        service.showBoughtItems = function(){
            return alreadyBoughtItems;
        }

    }
})();
