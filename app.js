(function(){

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunch = '';
    $scope.message = '';
    $scope.check = function(){
      if ($scope.lunch.length === 0) {
        $scope.message =  "Please enter data first";
      }
      else {
        if ($scope.lunch.split(',').length>3) {
          $scope.message = "Too much!";
        }
        else {
          $scope.message = 'Enjoy!';
        }
      }
    };
  };

})();
