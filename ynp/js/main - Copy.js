$(document).ready(function() {

    function fadeAnime() {

        //下からふわっ

        $('.fadeUpMaskTrigger').each(function() { //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top - 10; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeUpMask'); // 画面内に入ったらfadeUpというクラス名を追記
            } else {
                $(this).removeClass('fadeUpMask'); // 画面外に出たらfadeUpというクラス名を外す
            }
        });

        //下からふわっ

        $('.fadeUpTrigger').each(function() { //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top - 10; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
            } else {
                $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を外す
            }
        });

        //右からすっ
        $('.fadeRightTrigger').each(function() {
            var elemPos = $(this).offset().top - 10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeRight'); // 画面内に入ったらfadeRightというクラス名を追記
            } else {
                $(this).removeClass('fadeRight'); // 画面外に出たらfadeRightというクラス名を外す
            }
        });

        //左からすっ
        $('.fadeLeftTrigger').each(function() {
            var elemPos = $(this).offset().top - 10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeLeft'); // 画面内に入ったらfadeLeftというクラス名を追記
            } else {
                $(this).removeClass('fadeLeft'); // 画面外に出たらfadeLeftというクラス名を外す
            }
        });

        //開く
        $('.rotateYTrigger').each(function() {
            var elemPos = $(this).offset().top - 10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('rotateY'); // 画面内に入ったらrotateというクラス名を追記
            } else {
                $(this).removeClass('rotateY'); // 画面外に出たらrotateというクラス名を外す
            }
        });

    }


    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function() {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function() {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    $('.hamburger').click(function() {
        $(".mainmenu").fadeIn(500);
    });

    $('.mainmenu-close').click(function() {
        $(".mainmenu").fadeOut(500);
    });
    k = 0;
    var percentage = new Array();
    var bars = new Array();
    $("#bars li .bar").each(function(key, bar) {
        percentage[k] = $(this).data('percentage');
        bars[k] = $(this);

        $(this).animate({
            'height': percentage[k] + '%'
        }, 1000);

        k++;
    });

    function heightAnimation() {
        for (i = 0; i < bars.length; i++) {

            bars[i].removeAttr('style');
            bars[i].attr('height', '0%');

            bars[i].animate({
                'height': percentage[i] + '%'
            }, 1000);

            bars[i].removeAttr('style', 'overflow:hidden');

        }
        setTimeout(heightAnimation, 5000);
    }
    heightAnimation();

    setTimeout(function() { $(".loading").fadeOut(); }, 4000);

    //     $("#bars li .bar").each(function(key, bar) {
    //         var percentage = $(this).data('percentage');

    //         $(this).animate({
    //             'height': percentage + '%'
    //         }, 1000);
    //     })

    // var g = new Array();
    // g = $("svg g");

    // function pieAnimation() {
    //     //     for (i = 3; i < 3 + g.length - 1; i++)
    //     //         g[i - 3].removeClass('fadeG' + i.toString());

    //     for (i = 3; i < 3 + g.length - 1; i++)
    //         g[i - 3].addClass('fadeG' + i.toString());

    //     setTimeout(pieAnimation, 10000);
    // }

    // setTimeout(pieAnimation, 10000);

    $(".hamburger").click(function() {
        $(".menu-list").toggleClass('menu-list-show');
        $(".hamburger").toggleClass('change');
    });

    $("#check").click(function() {
        if ($("#department").val() == '') {
            alert('部署名を入力してください。');
            return;
        }

        if ($("#manager").val() == '') {
            alert('担当者名を入力してください。');
            return;
        }

        if ($("#content").val() == '') {
            alert('お問い合わせ内容を入力してください。');
            return;
        }

        $("#inc_text").toggleClass('btn-show');
        $("#inc").toggleClass('btn-show');
        $("#inc_text").html($("#inc").val());

        $("#department_text").toggleClass('btn-show');
        $("#department").toggleClass('btn-show');
        $("#department_text").html($("#department").val());

        $("#content_text").toggleClass('btn-show');
        $("#content").toggleClass('btn-show');
        $("#content_text").html($("#content").val());

        $("#manager_text").toggleClass('btn-show');
        $("#manager").toggleClass('btn-show');
        $("#manager_text").html($("#manager").val());

        $("#email_text").toggleClass('btn-show');
        $("#email").toggleClass('btn-show');
        $("#email_text").html($("#email").val());

        $("#phone_text").toggleClass('btn-show');
        $("#phone").toggleClass('btn-show');
        $("#phone_text").html($("#phone").val());

        $("#confirm").toggleClass('btn-show');
        $("#check").toggleClass('btn-show');
    });

    $("#edit").click(function() {
        $("#confirm").toggleClass('btn-show');
        $("#check").toggleClass('btn-show');

        $("#inc_text").toggleClass('btn-show');
        $("#inc").toggleClass('btn-show');

        $("#department_text").toggleClass('btn-show');
        $("#department").toggleClass('btn-show');

        $("#manager_text").toggleClass('btn-show');
        $("#manager").toggleClass('btn-show');

        $("#email_text").toggleClass('btn-show');
        $("#email").toggleClass('btn-show');

        $("#phone_text").toggleClass('btn-show');
        $("#phone").toggleClass('btn-show');

        $("#content_text").toggleClass('btn-show');
        $("#content").toggleClass('btn-show');

    });
});