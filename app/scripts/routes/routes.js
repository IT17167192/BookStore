app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/books.html',
            controller: 'homeController'
        })
        .when('/most-recent', {
            templateUrl: 'views/books.html',
            controller: 'mostRecentController'
        })
        .when('/most-popular', {
            templateUrl: 'views/books.html',
            controller: 'mostPopularController'
        })
        .when('/free-books', {
            templateUrl: 'views/books.html',
            controller: 'freeBooksController'
        })
        .when('/book/:id', {
            templateUrl: 'views/book.html',
            controller: 'bookController'
        })
}]);
