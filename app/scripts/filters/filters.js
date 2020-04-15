app.filter('trimText', function () {
    return function (text, textLength) {
        if(text.length > textLength){
            return text.slice(0, textLength) + '...';
        }
        return text;
    }
});
