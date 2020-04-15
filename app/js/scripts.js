app.controller('bookController', ['$scope', '$routeParams', 'bookstore', 'bookService', function ($scope, $routeParams, bookstore, bookService) {
    $scope.title = 'Book';
    bookstore.title = $scope.title;
    bookService.getBook($routeParams.id)
        .then(response => {
            $scope.bookData = response.data;
        })
        .catch(error => {
           console.error(error);
        });
}]);

app.controller('freeBooksController', ['$scope', 'bookstore', 'bookService', function ($scope, bookstore, bookService) {
    $scope.title = 'Free Books';
    bookstore.title = $scope.title;
    bookService.getFreeBooks()
        .then(response => {
            $scope.books = response.data;
        })
        .catch(error => {
            console.error(error);
        });
}]);

app.controller('homeController', ['$scope', 'bookstore', 'bookService', function ($scope, bookstore, bookService) {
    $scope.title = 'Browse Available Books';
    bookstore.title = $scope.title;
    bookService.getBooks()
        .then(response => {
            $scope.books = response.data;
        })
        .catch(error => {
            console.error(error);
        });
}]);

app.controller('mainController', ['$scope', '$location', 'bookstore', function ($scope, $location, bookstore) {
    $scope.$on('$routeChangeStart', function () {
        $scope.route = $location.path();
        $scope.title = bookstore.getTitle;
    });

    $scope.displayBook = (book) => {
        $location.path('/book/' + book.id);
    };
}]);

app.controller('mostPopularController', ['$scope', 'bookstore', 'bookService', function ($scope, bookstore, bookService) {
    $scope.title = 'Most Popular Books';
    bookstore.title = $scope.title;
    bookService.getMostPopularBooks()
        .then(response => {
            $scope.books = response.data;
        })
        .catch(error => {
            console.error(error);
        });
}]);

app.controller('mostRecentController', ['$scope', 'bookstore', 'bookService', function ($scope, bookstore, bookService) {
    $scope.title = 'Most Recent Books';
    bookstore.title = $scope.title;
    bookService.getBooks()
        .then(response => {
            $scope.books = response.data.filter(book => {
                const uploaded = new Date(book.uploaded);
                const today = new Date();

                const timeDiff = Math.abs(today.getTime() - uploaded.getTime());
                const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

                if (dayDiff < 30) {
                    return book;
                }

            });
        }).catch(error => {
            console.error(error);
        });

}]);

app.filter('trimText', function () {
    return function (text, textLength) {
        if(text.length > textLength){
            return text.slice(0, textLength) + '...';
        }
        return text;
    }
});

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

app.service('bookService', ['$http', function ($http) {
    this.getBooks = function () {
        return $http({
            method: 'GET',
            url: '../php/getBooks.php'
        })
            .then(res => {
                return res;
            }).catch(error => {
                return error;
            });
    },
    this.getMostPopularBooks = function () {
        return $http({
            method: 'GET',
            url: '../php/mostPopularBooks.php'
        })
            .then(res => {
                return res;
            }).catch(error => {
                return error;
            });
    },
    this.getFreeBooks = function () {
        return $http({
            method: 'GET',
            url: '../php/getFreeBooks.php'
        })
            .then(res => {
                return res;
            }).catch(error => {
                return error;
            });
    },
    this.getBook = function (id) {
        return $http({
            method: 'POST',
            data: {bookID: id},
            url: '../php/getBook.php'
        })
            .then(res => {
                return res;
            })
            .catch(error => {
                return error;
            });
    }
}]);

app.service('bookstore', function () {
    $this = this,
    $this.title = '',
    $this.getTitle = function () {
        return $this.title;
    }
})
