(function () {
    angular.module('myAppFinal', ['myServices'])
        .controller('shell', ['$scope',
            'appVersion', 'userInfo', 'dataContextFctry', 'dataContextSrvc', 'dataContext',
            function ($scope, appVersion, userInfo, dataContextFctry, dataContextSrvc, dataContext) {
                $scope.title = "IoC / DI";
                $scope.appVersion = appVersion;
                $scope.userInfo = userInfo;

                //$scope.todoList = dataContextFctry.todoList;
                
                //$scope.todoList = dataContextSrvc.todoList;

                $scope.todoList = dataContext.todoList;

                $scope.failTheHardWay = function() {
                    failHard();
                };
                
                function failHard() {
                    throw "we messed things up!";
                }
            }])
        .config(['dataContextProvider',
            function (dataContextProvider) {
                dataContextProvider.setTodoList([{ id: 5, text: 'test 5' }, { id: 6, text: 'test 6' }]);
            }]);
})();