
var DAFAULT_IMAGE = "image/default.png";

var isNull = function (obj) {
    if (obj === undefined || obj === null) {
        return true;
    }
    return false;
};


var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

var getAppID = function () {
    var tvSearchId = localStorage.getItem('surveyAppId');
    if (tvSearchId === "undefined" || tvSearchId === null) {
        tvSearchId = ID();
        localStorage.setItem('surveyAppId', tvSearchId);
    }
    return tvSearchId;
};

var app = angular.module('myApp', ['ngResource', 'ngRoute', 'chart.js']);

app.config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: ['#FF5252', '#FF8A80'],
            responsive: false
        });

    }]);

app.filter('parse', function () {
    return function (input) {
        return JSON.parse(input);
    };
});

app.filter('inSlicesOf', ['$rootScope',
    function ($rootScope) {
        makeSlices = function (items, count) {
            if (!count)
                count = 3;

            if (!angular.isArray(items) && !angular.isString(items))
                return items;

            var array = [];
            for (var i = 0; i < items.length; i++) {
                var chunkIndex = parseInt(i / count, 10);
                var isFirst = (i % count === 0);
                if (isFirst)
                    array[chunkIndex] = [];
                array[chunkIndex].push(items[i]);
            }

            if (angular.equals($rootScope.arrayinSliceOf, array))
                return $rootScope.arrayinSliceOf;
            else
                $rootScope.arrayinSliceOf = array;

            return array;
        };

        return makeSlices;
    }
]);

app.directive('showTv', function () {
    return {
        restrict: 'AE',
        replace: 'false',
        templateUrl: 'view/show-templete.html'
    };
});

app.config(
        function ($routeProvider) {
            $routeProvider.
                    when('/task_1', {
                        controller: 'Task1Ctrl',
                        templateUrl: 'assets/view/task_1.html',
                        activetab: 'task_1'
                    })
                    .when('/task_2', {
                        controller: 'Task2Ctrl',
                        templateUrl: 'assets/view/task_2.html',
                        activetab: 'task_2'
                    })
                    .when('/task_3', {
                        controller: 'Task3Ctrl',
                        templateUrl: 'assets/view/task_3.html',
                        activetab: 'task_3'
                    })
                    .when('/about', {
                        templateUrl: 'assets/view/about.html',
                        activetab: 'about'
                    })
                    .otherwise({
                        redirectTo: '/task_2'
                    });
        }
);

app.factory('RestFactory', function ($resource) {
    return $resource("api/search");
});

app.factory('ShowFactory', function ($resource) {
    return $resource("/api/show/:showID");
});

app.factory('PromiseDemoFactory', function ($resource) {
    return $resource("/api/promise-demo/:searchParam");
});

app.service('SearchService', function (ShowFactory, RestFactory, PromiseDemoFactory) {

    var addSearchItem = function (searchParam) {
        console.log("searchParam>> " + searchParam);
    };

    return {
        addSearchItem: addSearchItem
    };
});


app.controller("MenuCntrl", function ($scope, $route) {
    console.log("I am MenuCntrl");
    $scope.$route = $route;
});

app.controller("Task1Ctrl", ['$scope', function ($scope) {
        console.log("I am Task1Ctrl");
    }]);

app.controller("Task2Ctrl", ['$scope', function ($scope) {
        console.log("I am Task2Ctrl");
        $scope.labels = ["Download Sales", "In-Store Sales"];
        $scope.data = [300, 500];
        $scope.options = {
            tooltipEvents: [],
            showTooltips: true,
            tooltipCaretSize: 0,
            responsive: false,
            maintainAspectRatio: false,
            onAnimationComplete: function () {
                this.showTooltip(this.segments, true);
            }
        };

    }]);


app.controller("Task3Ctrl", ['$scope', function ($scope) {
        console.log("I am Task3Ctrl");
    }]);

