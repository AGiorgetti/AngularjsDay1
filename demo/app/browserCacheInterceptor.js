angular.module('myAppFinal')
    .config(['$provide', '$httpProvider', 'appVersion', function ($provide, $httpProvider, appVersion) {

        // register a new interceptor that will
        // defeat the browser cache appending a version number to each template request
        $provide.factory('defeatTheCacheInterceptor', function() {
            return {
                // see the $http service for more informations
                'request': function(config) {
                    // only for those url that ends with '.html', those are partials.
                    if (config.method == 'GET' && !config.cache.get(config.url) && window.utils.string.endsWith(config.url, '.html')) {
                        var p = config.params;
                        if (p === undefined)
                            p = appVersion;
                        else
                            p = angular.extend(p, appVersion);
                        config.params = p;
                    }
                    return config;
                }
            };
        });
        
        // use the service provide to configure the interceptor usage.
        $httpProvider.interceptors.push('defeatTheCacheInterceptor');
        
    }]);

(function (utils, undefined) {
    utils.string = {
        isNullOrEmpty: function (str) {
            return str == null || str == '';
        },
        endsWith: function (sourceString, suffix) {
            return sourceString.indexOf(suffix, sourceString.length - suffix.length) !== -1;
        },
        contains: function (sourceString, substr) {
            // case insensitive search inside the string
            var ri = new RegExp(substr, 'i');
            return ri.test(sourceString);
        }
    };
})(window.utils = window.utils || {});