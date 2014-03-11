(function () {
    angular.module('myServices', [])
        // registers a value/object that can be accessed by providers and services
        .constant('appVersion', { ver: '0.0.1' })

        // registers a value/object that can only be accessed by services, not providers
        .value('userInfo', { id: 1, username: 'Alessandro', groups: ['Admin'] })

        // registers a constructor function, class that will be wrapped in a service provider object,
        // whose $get property will instantiate a new object using the given constructor function
        .service('dataContext', function () {
            this.people = ['Alessandro', 'Giuseppe', 'Roberto'];
        })

        // registers a service factory function, fn, that will be wrapped in a service provider object,
        // whose $get property will contain the given factory function.
        .factory('dataContextFnc', function () {
            //this.people = ['Alessandro', 'Giuseppe', 'Roberto'];
            var people = ['Alessandro', 'Giuseppe', 'Roberto'];
            return { people: people };
        });
})();