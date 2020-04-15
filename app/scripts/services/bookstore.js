app.service('bookstore', function () {
    $this = this,
    $this.title = '',
    $this.getTitle = function () {
        return $this.title;
    }
})
