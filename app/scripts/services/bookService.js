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
