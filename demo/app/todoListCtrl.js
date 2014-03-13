angular.module('myAppFinal')
        .controller('todoListCtrl', ['$scope',
            'dataContextFctry', 'dataContextSrvc', 'dataContext',
            function ($scope, dataContextFctry, dataContextSrvc, dataContext) {
                //var dataCtx = dataContextFctry;
                //var dataCtx = dataContextSrvc;
                var dataCtx = dataContext;

                $scope.todoList = dataCtx.todoList;

                $scope.addnew = function (id, text) {
                    dataCtx.addTodo(id, text);
                };
            }])