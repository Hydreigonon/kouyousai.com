$(function(){
    $(".md-btn").each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).find('.md-overlay,.md-contents').fadeIn();
        });
    });
    $('.md-close').on('click', function(){
        $('.md-overlay,.md-contents').fadeOut();
    })
});
