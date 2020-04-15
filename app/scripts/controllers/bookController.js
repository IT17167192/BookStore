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
