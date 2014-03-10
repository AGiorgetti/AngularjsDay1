(function () {
    angular.module('myApp', [])
        .controller('shell', ['$scope', function ($scope) {
            $scope.title = "IoC / DI";
            $scope.mainContent = "main content";
        }]);
})();