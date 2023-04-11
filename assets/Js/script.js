"use strict";

$(function () {
    $("#active").css({
        cursor: 'zoom-in'
    });

    $("img").attr("title", "View");


    $('#bg').css({
        'width': '100%',
        'height': '100%',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center',
        'background-color': 'rgba(0,0,0,0.5)',
        position: 'fixed',
        top: 0,
        display: "none",
        'cursor': 'zoom-out'

    })


    $('#active').click(function () {
        let imgPath = $(this).attr('src');
        $('#bg').css({
            'background-image': `url('${imgPath}')`,
            'display': 'block'
        })
    });

    $('#bg').click(function () {
        $('#bg').css({
            'display': 'none'
        })
    })


});
let getImg = document.querySelector('#active');

$('img').click(function () {
    let getSrc = $(this).attr('src');
    $(getImg).attr('src', `${getSrc}`)
    $(this).css({
        cursor: 'pointer'
    });
})