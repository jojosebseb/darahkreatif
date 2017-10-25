var id, lastChar, int;

$('.blue-button').on('click', function(){
    id = $(this).parents('.progress-section').attr('id');
    lastChar = id[id.length -1];
    int = parseInt(lastChar)+1;
    $(this).parents('.progress-section').removeClass('active');
    $('#section-'+int).addClass('active');
    if ($(this).attr('id') == 'Finish') {
        $(this).parents('.progress-section').removeClass('active');
        $('#section-8').addClass('active');
    }
});
$('#shortCut').on('click', function(){
    $(this).parents('.progress-section').removeClass('active');
    $('#section-shortCut').addClass('active');
});

$('.progress-section').each(function(){
    $(this).find('*').each(function(i){
        $(this).css({
            'transition-delay': i/10+'s'
        });
    });
    $(this).find('p').each(function(i){
        $(this).css({
            // 'transition-delay': (i/1)+0.50+'s'
        });
    });
});

// $('.droppable-parent').sortable();
// $('.droppable-parent').draggable();



setTimeout(function(){
    $('.preload-parent').addClass('hide');
    $('.preload-parent-2').addClass('active');
}, 2000);

setTimeout(function(){
    $('.progressive-parent').addClass('active');
    $('#section-1').addClass('active');

    $('.logo').addClass('active');
    $('.preload-parent-2').addClass('hide');
}, 4100);


$('.jo-checkbox').each(function(){
    $(this).wrap('<div class="jo-checkbox-parent"><div class="jo-checkbox-box"></div></div>');
});

$('body').on('click', '.jo-checkbox-parent', function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).find('.jo-checkbox').attr('checked', true);
    }
    else {
        $(this).find('.jo-checkbox').attr('checked', false);
    }
    // console.log('asd');
});

$('.jo-checkbox').on('change', function(){
    console.log('asd');
})
