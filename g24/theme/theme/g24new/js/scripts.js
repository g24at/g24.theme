(function($) {
$(document).ready(function() {

    var $container = $('div.listing');
    // masonry
    $container.isotope({
        // options...
        itemSelector: '.element',
        layoutMode: 'masonry'
    });

    // infinite scroll
    var batch_size = 10;
    var next_button_selector = 'div.listingBar span.next a';

    function plone_path(next_page) {
        path = $(next_button_selector).attr('href');
        if (path.match(/^(.*?b_start.*?$)/)) {
            // Plone Batching
            parsed_path = path.match(/^(.*?b_start:int=)\d*(.*?$)/).slice(1);
            return parsed_path[0] + (next_page-1)*batch_size + parsed_path[1] + '&b_size='+ batch_size + '&ajax_load=1';
        }
        return [''];
    }

    var last_page = $('div.listingBar a:last').attr('href');
    var last_page_paths = last_page.match(/^(.*?b_start:int=)(\d*)(.*?$)/).slice(1);
    var max_page = (last_page_paths[1]/batch_size)+1;

    $container.infinitescroll({
        //debug: true,
        navSelector:  "div.listingBar",
        nextSelector: next_button_selector,
        itemSelector: "#content-core article",
        path: plone_path,
        maxPage: max_page,
        loading: {
            finishedMsg: 'No more pages to load.',
            img: 'http://i.imgur.com/6RMhx.gif',
            speed: 'fast',
        }
    },
    function(newElements) {
        $container.isotope('appended', $(newElements));
    });


    $('.collapse').on('hidden', function () {
        //var article = $(this).closest('article');
        //article.width(article.width()/2);
        $container.isotope('reLayout');
    });
    $('.collapse').on('shown', function () {
        //var article = $(this).closest('article');
        //article.width(article.width()*2);
        $container.isotope('reLayout');
    });

    $('.close_element').on('click', function() {
        var article = $(this).closest('article');
        article.remove();
        $container.isotope('reLayout');
    });

});
}(jQuery));
