(function () {
    angular.module('myServices', [])
        // registers a value/object that can be accessed by providers and services
        .constant('appVersion', { ver: '0.0.1' })

        // registers a value/object that can only be accessed by services, not providers
        .value('userInfo', { id: 1, username: 'Alessandro', groups: ['Admin'] })

        // registers a service factory function, fn, that will be wrapped in a service provider object,
        // whose $get property will contain the given factory function.
        .factory('dataContextFctry', ['userInfo', function (userInfo) {
            // this is just an example: the istance is singleton, so used in this way: 'the first user to login wins all!'
            // do something with the authenticated user
            if (userInfo == null)
                return null;

            var todoList = [{ id: 1, text: 'test 1' }, { id: 2, text: 'test 2' }];

            function addTodo(id, text) {
                todoList.unshift({ id: id, text: text });
            }

            return {
                todoList: todoList,
                addTodo: addTodo
            };
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
            var todoList = [];

            this.setTodoList = function (list) {
                todoList = list;
            };

            // $get is injectable
            this.$get = ['userInfo', function (userInfo) {
                // this is just an example: the istance is singleton, so used in this way: 'the first user to login wins all!'
                // do something with the authenticated user
                if (userInfo == null)
                    return null;

                if (todoList.length == 0)
                    todoList = [{ id: 1, text: 'not' }, { id: 2, text: 'initialized' }];

                function addTodo(id, text) {
                    todoList.unshift({ id: id, text: text });
                }

                return {
                    todoList: todoList,
                    addTodo: addTodo
                };
            }];
        });

    // this one will be instantiated using 'new'
    function dataContextService(userInfo) {
        var self = this;

        // this is just an example: the istance is singleton, so used in this way: 'the first user to login wins all!'
        // do something with the authenticated user
        if (userInfo == null)
            return null;

        // public methods ... or you can extend the protorype.
        this.addTodo = function (id, text) {
            self.todoList.unshift({ id: id, text: text });
        };

        this.todoList = [{ id: 3, text: 'test 4' }, { id: 4, text: 'test 4' }];
    }

})();