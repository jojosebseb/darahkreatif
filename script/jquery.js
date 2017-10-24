var id, lastChar, int;

$('.blue-button').on('click', function(){
    id = $(this).parents('.progress-section').attr('id');
    lastChar = id[id.length -1];
    int = parseInt(lastChar)+1;
    $(this).parents('.progress-section').removeClass('active');
    $('#section-'+int).addClass('active');

});

$('.progress-section').each(function(){
    $(this).find('*').each(function(i){
        $(this).css({
            'transition-delay': i/50+'s'
        });
    });
});

$('.droppable-parent').sortable();

$('.jo-checkbox').each(function(){

});

setInterval(function(){
    $('.preload-parent').addClass('hide');
}, 2000);
