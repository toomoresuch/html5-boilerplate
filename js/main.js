require.config({
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
        bootstrap: '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        fancybox: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.4/jquery.fancybox.pack',
        plugins: '../js/plugins'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        fancybox: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'fancybox', 'plugins'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

    $(document).ready(function() {
        $('#carousel').carousel();
        $('.fancybox').fancybox({padding : 0});
    });

});