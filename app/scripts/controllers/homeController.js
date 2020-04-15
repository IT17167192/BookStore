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
