(function(){

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunch = '';
    $scope.message = '';
    $scope.color = '';
    $scope.check = function(){
      if ($scope.lunch.length === 0) {
        $scope.message =  "Please enter data first";
      }
      else {
        if ($scope.lunch.split(',').length>3) {
          $scope.message = "Too much!";
          $scope.color = 'red';
        }
        else {
          $scope.message = 'Enjoy!';
          $scope.color = 'green';
        }
      }
    };
  };

})();
