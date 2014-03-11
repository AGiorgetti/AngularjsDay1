(function () {
    angular.module('myAppFinal', ['myServices'])
        .controller('shell', ['$scope',
            'appVersion', 'userInfo', 'dataContext', 'dataContextFnc',
            function ($scope, appVersion, userInfo, dataContext, dataContextFnc) {
                $scope.title = "IoC / DI";
                $scope.appVersion = appVersion;
                $scope.userInfo = userInfo;
                $scope.people = dataContext.people;
                
            }])
        .config(['$provide',
            function ($provide) {
                // fase di configurazione dell'applicazione
                // possiamo registrare altri componenti
            }]);
})();