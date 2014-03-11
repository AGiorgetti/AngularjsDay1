(function () {
    angular.module('myServices', [])
        // registers a value/object that can be accessed by providers and services
        .constant('appVersion', { ver: '0.0.1' })

        // registers a value/object that can only be accessed by services, not providers
        .value('userInfo', { id: 1, username: 'Alessandro', groups: ['Admin'] })

        // registers a service factory function, fn, that will be wrapped in a service provider object,
        // whose $get property will contain the given factory function.
        .factory('dataContextFctry', ['userInfo', function (userInfo) {
            // todo: filter out by the user
            var todoList = [{ id: 1, text: 'test 1' }, { id: 2, text: 'test 2' }];
            return { todoList: todoList };
        }])

        // registers a constructor function, class, that will be wrapped in a service provider object,
        // whose $get property will instantiate a new object using the given constructor function
        .service('dataContextSrvc', ['userInfo', dataContextService])
        // this is the same as:
        //.factory('dataContextSrvc', ['userInfo', function (userInfo) {
        //    return new dataContextService(userInfo);
        //}]);

        // Register a provider function
        .provider('dataContext', function () {
            var todoStartupLoist = [];

            this.setTodoList = function (list) {
                todoStartupLoist = list;
            };

            // $get is injectable
            this.$get = ['userInfo', function (userInfo) {
                // todo: filter out by the user
                if (todoStartupLoist.length == 0)
                    todoStartupLoist = [{ id: 1, text: 'test 1' }, { id: 2, text: 'test 2' }];
                return { todoList: todoStartupLoist };
            }];
        });

    function dataContextService(userInfo) {
        // todo: filter out by the user
        var todoList = [{ id: 3, text: 'test 4' }, { id: 4, text: 'test 4' }];
        return { todoList: todoList };
    }
})();