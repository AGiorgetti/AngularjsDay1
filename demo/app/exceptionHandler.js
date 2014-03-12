(function () {
    // By default, AngularJS will catch errors and log them to
    // the Console. We want to keep that behavior; however, we
    // want to intercept it so that we can also log the errors
    // to the server for later analysis; let's use a decorator pattern
    angular.module('myAppFinal')
        .config(['$provide', 'appVersion', function ($provide, appVersion) {
            // there's no helper method on the module to define a decorator.
            $provide.decorator("$exceptionHandler", ['$delegate', function ($delegate) {
                return function (exception, cause) {
                    // original function call
                    $delegate(exception, cause);

                    // Now, we need to try and log the error the server.
                    try {

                        // enrich the error with some extended information (app version, stacktrace and so on);
                        //var p = printStackTrace({ e: exception });
                        var err = {
                            msg: exception.toString(),
                            stack: printStackTrace({ e: exception }).join('\n'),
                            cause: cause || '',
                            ver: appVersion.ver
                        };

                        // todo: use a service to log the error server side
                        // in this demo just reprint to the console the extended infos
                        $delegate(err, cause);

                    } catch (loggingError) {

                        // use the original loggin function again to display a message incase of failure
                        // to communicate the error to the client
                        $delegate(loggingError, "Error logging failed");
                    }
                };
            }]);
        }]);

})();