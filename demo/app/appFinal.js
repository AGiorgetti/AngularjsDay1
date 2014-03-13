(function () {
    angular.module('myAppFinal', ['myServices'])
        .controller('shell', ['$scope',
            'appVersion', 'userInfo',
            function ($scope, appVersion, userInfo) {
                $scope.title = "IoC / DI";
                $scope.appVersion = appVersion;
                $scope.userInfo = userInfo;

                $scope.failTheHardWay = function () {
                    throw new Error("Something went really wrong!");
                };
            }])
        .config(['dataContextProvider',
            function (dataContextProvider) {
                dataContextProvider.setTodoList([{ id: 5, text: 'custom' }, { id: 6, text: 'values' }]);
            }]);
})();