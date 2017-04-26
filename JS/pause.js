
$(function () {
    $('.inout').hide(0);
    $('.contents').hide(0);
    $('.contentslineone').hide(0);
    $('#obj03').hide(0);
    $('#obj04').hide(0);
});

function dispObject(id) {
    id.show('slow');
}
setTimeout("dispObject($('.inout'))", 4000);
setTimeout("dispObject($('.contents'))", 5000);
setTimeout("dispObject($('.contentslineone'))", 5000);
setTimeout("dispObject($('#obj03'))", 4000);
setTimeout("dispObject($('#obj04'))", 5000);
