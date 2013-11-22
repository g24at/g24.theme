(function($) {
$(document).ready(function() {
    var container = document.querySelector('#content-core');
    var msnry = new Masonry( container, {
        // options...
        itemSelector: '.element',
    });

    $('.collapse').on('hidden', function () {
        //var article = $(this).closest('article');
        //article.width(article.width()/2);
        msnry.layout();
    });
    $('.collapse').on('shown', function () {
        //var article = $(this).closest('article');
        //article.width(article.width()*2);
        msnry.layout();
    });

});
}(jQuery));
