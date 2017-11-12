/*global console, $, jQuery*/
$(function () {
    "use strict";
    function addGoal() {
    }
    $('#sort-projects').on('click', function (e) {
        var t = $(e.target);
        if (!t.hasClass('selected')) {
            t.siblings('.selected').removeClass('selected').end().addClass('selected');
        }
        if ($(this).hasClass('open')) {
            $(this).removeClass('open').children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $(this).children('ul').children('li').not('.selected').each(function () {
                $(this).slideUp();
            });
            $(this).children('ul').children('li').css('border', 'none');
        } else {
            $(this).addClass('open').children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            $(this).children('ul').children('li').each(function () {
                $(this).slideDown(400, function () {
                    $(this).next('li').css('border-top', '1px solid #fff');
                });
            });
        }
    });
    var moving = false,
        $loginMsg = $('.loginMsg'),
        $login = $('.login'),
        $signupMsg = $('.signupMsg'),
        $signup = $('.signup'),
        $frontbox = $('.frontbox');
    $signup.hide().removeClass('hide');
    $('#switch1, #switch2').on('click', function () {
        if (!moving) {
            moving = true;
            var target = $(this).data('target'),
                other = target === '.login' ? '.signup' : '.login';
            $frontbox.toggleClass('moving');
            $(target + 'Msg').removeClass('visibility');
            $(other + 'Msg').addClass('visibility');
            $(other).fadeOut(400, function () {
                $(target).fadeIn(400, function () {
                    moving = false;
                });
            });
        }
    });
    $('.forget-ps, .agree-terms').on('click', function () {
        if ($(this).hasClass('forget-ps')) {
            $(this).toggleClass('text-muted');
        }
        if ($('i', this).hasClass('fa-check-square-o')) {
            $('i', this).removeClass('fa-check-square-o').addClass('fa-square-o');
        } else {
            $('i', this).removeClass('fa-square-o').addClass('fa-check-square-o');
        }
    });
});