angular.module('myControls', ['myServices'])
        .controller('todoListCtrl', ['$scope',
            'dataContext', // dataContextFctry, dataContextSrvc dataContext
            function ($scope, dataCtx) {

                $scope.dataCtx = {
                    name: dataCtx.name,
                    todoList: dataCtx.todoList
                };

                $scope.addnew = function (id, text) {
                    dataCtx.addTodo(id, text);
                };
            }])