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
