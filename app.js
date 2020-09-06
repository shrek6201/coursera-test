(function () {
  'use strict'

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.result='';
    $scope.dishes='';
  
  $scope.lunchCheck = function () {
    if($scope.dishes.trim().length == 0) {
      $scope.isEmpty = true;
      }
    else {
      $scope.isEmpty = false;

      var splitDishes = $scope.dishes.split(',');
      var checkDish = splitDishes.filter(function(dish){
        return dish.trim() != '';
      })

      if(checkDish.length <= 3 ) {
        $scope.result = "Enjoy Fam!";
      }
      else {
        $scope.result = "Too much Fam!";
      }

      }
    };
  }
})();