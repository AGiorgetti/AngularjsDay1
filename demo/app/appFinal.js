(function () {
    angular.module('myAppFinal', ['myServices'])
        .controller('shell', ['$scope',
            'appVersion', 'userInfo', 'dataContextFctry', 'dataContextSrvc', 'dataContext',
            function ($scope, appVersion, userInfo, dataContextFctry, dataContextSrvc, dataContext) {
                $scope.title = "IoC / DI";
                $scope.appVersion = appVersion;
                $scope.userInfo = userInfo;

                //var dataCtx = dataContextFctry;
                //var dataCtx = dataContextSrvc;
                var dataCtx = dataContext;

                $scope.todoList = dataCtx.todoList;

                $scope.addnew = function (id, text) {
                    dataCtx.addTodo(id, text);
                };

                $scope.failTheHardWay = function () {
                    throw new Error("Something went really wrong!");
                };
            }])
        .config(['dataContextProvider',
            function (dataContextProvider) {
                dataContextProvider.setTodoList([{ id: 5, text: 'test 5' }, { id: 6, text: 'test 6' }]);
            }]);
})();