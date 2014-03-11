(function () {
    angular.module('myApp', ['myServices'])
        .controller('shell', ['$scope', function ($scope) {
            $scope.title = "IoC / DI";
            $scope.mainContent = "main content";
        }]);
})();