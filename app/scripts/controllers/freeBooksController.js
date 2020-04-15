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
