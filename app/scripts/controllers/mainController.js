app.controller('mainController', ['$scope', '$location', 'bookstore', function ($scope, $location, bookstore) {
    $scope.$on('$routeChangeStart', function () {
        $scope.route = $location.path();
        $scope.title = bookstore.getTitle;
    });

    $scope.displayBook = (book) => {
        $location.path('/book/' + book.id);
    };
}]);
