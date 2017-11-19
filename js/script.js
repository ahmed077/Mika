/*global console, $, jQuery*/
$(function () {
    "use strict";
    function addGoal() {
    }
    
    //Goals dropdown menu
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
    //Login/Sign up form
    var moving = false,
        divTall = 0,
        mainTall,
        tallPerc,
        scrollTall,
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
    //login/signup form checkboxes
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
    //scrollbar
    //height function
    $('.task').each(function () {
        divTall += $(this).outerHeight();
    });
    mainTall = $('main').outerHeight();
    tallPerc = (mainTall / divTall) *   100;
    mainTall = mainTall - mainTall * 10 / 100;
    scrollTall = mainTall * tallPerc / 100;
    $('.scroll').css('height', scrollTall + 'px');
    function scrollHandle(scrollData, section) {
        if (scrollData > 0) {
            section.css('margin-top', parseInt(section.css('margin-top'), 10) + 30 + "px");
        } else {
            section.css('margin-top', parseInt(section.css('margin-top'), 10) - 30 + "px");
        }
    }
    $('.main').bind('mousewheel', function (e) {
        var scrollData = e.originalEvent.wheelDelta,
            target = $('.task-container');
        scrollHandle(scrollData, target);
    });
    $('.main').bind('DOMMouseScroll', function (e) {
        var scrollData = e.originalEvent.detail,
            target = $('.task-container');
        scrollHandle(scrollData, target);
    });
    
    //addgoal form
    $('.goaltype label').on('click', function (e) {
            var target = $(e.currentTarget).data('target'),
                other = target === 'dateform' ? 'timeform' : 'dateform';
            if ($("#" + target).hasClass('hide')) {
                $('#' + other).slideUp(400, function () {
                    $(this).addClass('hide');
                });
                $("#" + target).hide().removeClass('hide').slideDown(400);
            
        }
    });
    //login / signup form validation client side
    $('.login').on('submit', function (e) {
        var error = false,
            email = $('#login-email', $(e.currentTarget)).val(),
            password = $('#login-password', $(e.currentTarget)).val();
        //validation
        if (error) {
            e.preventDefault();
        }
    });
    $('.signup').on('submit', function (e) {
        var error = false,
            name = $('#signup-name', $(e.currentTarget)),
            email = $('#signup-email', $(e.currentTarget)),
            password = $('#signup-password', $(e.currentTarget)),
            confirmpassword = $('#signup-confirmpassword', $(e.currentTarget));
        if (password.val().length < 8 || password.val().length > 20) {
            password.siblings('.error').text('Password is allowed between 8 & 20 characters').hide().removeClass('hide').slideDown();
            error = true;
        } else if (confirmpassword.val() !== password.val()) {
            confirmpassword.siblings('.error').text("Password doesn't match.").hide().removeClass('hide').slideDown();
            error = true;
        }
        //validation
        if (error) {
            e.preventDefault();
        }
    });
    //test function
    function testString(val, pat) {
        var res = pat.match(val);
        return res;
    }
    //toggle header menu
    $('#settings-menu').siblings('ul').hide().removeClass('hide');
    $('#settings-menu').on('click', function () {
        $(this).siblings('ul').slideToggle();
    });


});