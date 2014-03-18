(function () {
    angular.module('myApp', ['myServices', 'myControls'])
        .controller('shell', ['$scope',
            function ($scope) {
                $scope.title = "IoC / DI";
                
            }]);
})();