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
