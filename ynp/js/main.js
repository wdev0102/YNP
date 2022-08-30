$(document).ready(function() {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

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

    var bar_style = "";
    var bars = new Array();

    bars[0] = $("#ses_m").val();
    bars[1] = $("#ses_f").val();
    bars[2] = $("#si_m").val();
    bars[3] = $("#si_f").val();
    for (k = 1; k <= 4; k++) {

        bar_style = bar_style + ".anim" + k.toString() + " {animation: anim" + k.toString() + " 10s  ease both;}@keyframes anim" + k + " {0% {height: 0%;}50% {height: " + bars[k - 1].toString() + "%;}90% {opacity: 1;}100% {opacity: 1;height: " + bars[k - 1].toString() + "%;}}";
    }

    $(window).scroll(function() {
        var elemPos = $("#recruit").offset().top;
        var scroll = window.pageYOffset;
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(".column-chart").removeAttr("style");
            $("#bar_style").html(bar_style);

            elemPos = $(".column-chart").offset().top;

            if (scroll >= elemPos + $(".column-chart").height() - windowHeight) {
                $(".piechart").removeAttr("style");
            }
        }

    });
    setTimeout(function() { $(".loading").fadeOut(); }, 4000);

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

    var pert = new Array(6);
    var angle = new Array(6);
    var tx = 1,
        ty = 1,
        r = 16;
    var color = ["#3366cc", "#dc3912", "#ff9900", "#0099c6", "#990099", "#109618"];
    var str_style = "",
        str_txt = "",
        str_line = "",
        str_circle = "";

    pert[0] = parseInt($("#dvp").val());
    pert[1] = parseInt($("#srv").val());
    pert[2] = parseInt($("#ntw").val());
    pert[3] = parseInt($("#mo").val());
    pert[4] = parseInt($("#it").val());
    pert[5] = parseInt($("#oth").val());

    f_width = "";
    f_font = "";
    f_height = "0px";
    w = screen.width;

    if (w >= 768) {
        f_width = "300px";
        f_font = "30px";
        f_height = "0px";
    } else if (f_width < 768) {
        f_width = "80%";
        f_font = "15px";
        f_height = "70px";
    }
    str_style = "figure {background-color: rgba(255, 255, 255, 0);display: block;height: " + f_height + ";margin: 0 auto;position: relative;font-size: 16px;font-size: 1vw;width: " + f_width + ";padding-bottom: 40em;}figcaption {font-size: " + f_font + ";text-align: center;font-weight: bold;color: #000;width: 100%;position: absolute;left: 0;top: 45%;z-index: 2;}svg {display: block;height: 100%;width: 100%;position: absolute;top: 0;left: 0;overflow: visible;}.circle {fill: rgba(0, 0, 0, 0);stroke-width: 13;stroke-dasharray: 0, 0, 0, 100;stroke-dashoffset: 25;-webkit-animation: pie1 10s  ease;animation: pie1 10s  ease;}.pie0 {fill: rgba(255, 255, 255, 0);stroke: rgba(255, 255, 255, 0);stroke-width: 15;stroke-dashoffset: 25;-webkit-animation: pie0 10s  ease;animation: pie0 10s  ease;}@-webkit-keyframes pie0 {0% {opacity: 0;}10% {opacity: 1;}90% {opacity: 1;}100% {opacity: 0;}}@keyframes pie0 {0% {/* transform: scale(0.1); */opacity: 0;}10% {/* transform: scale(1); */opacity: 1;}90% {opacity: 1;}100% {opacity: 0;}}path {animation: path 10s  ease;stroke-dasharray: 100, 0, 0, 0;opacity:1;}@keyframes path {0% {opacity: 0;}29% {opacity: 0;}30% {opacity: 1;stroke-dasharray: 0, 0, 0, 100;}50% {stroke-dasharray: 100, 0, 0, 0;}90% {opacity: 1;}100% {opacity: 1}}g>text {animation: txt 10s  ease;opacity:1;}@keyframes txt {0% {opacity: 0;}35% {opacity: 0;}55% {opacity: 1;}90% {opacity: 1;}100% {opacity: 1;}}.p0{opacity:0;animation:p0 10s ease ;} @keyframes p0{0%{opacity:0;}9%{opacity:0;}10%{opacity:1;}12%{opacity:0;}100%{opacity:0}}.p1{opacity:0;animation:p1 10s ease ;} @keyframes p1{0%{opacity:0;}12%{opacity:0;}13%{opacity:1;}14%{opacity:0;}100%{opacity:0}}.p2{opacity:0;animation:p2 10s ease ;} @keyframes p2{0%{opacity:0;}14%{opacity:0;}15%{opacity:1;}16%{opacity:0;}100%{opacity:0}}.p3{opacity:0;animation:p3 10s ease ;} @keyframes p3{0%{opacity:0;}16%{opacity:0;}17%{opacity:1;}18%{opacity:0;}100%{opacity:0}}.p4{opacity:0;animation:p4 10s ease ;} @keyframes p4{0%{opacity:0;}18%{opacity:0;}19%{opacity:1;}20%{opacity:0;}100%{opacity:0}}.p5{opacity:0;animation:p5 10s ease ;} @keyframes p5{0%{opacity:0;}20%{opacity:0;}21%{opacity:1;}22%{opacity:0;}100%{opacity:0}}.p6{opacity:0;animation:p6 10s ease ;} @keyframes p6{0%{opacity:0;}22%{opacity:0;}23%{opacity:1;}24%{opacity:0;}100%{opacity:0}}.p7{opacity:0;animation:p7 10s ease ;} @keyframes p7{0%{opacity:0;}24%{opacity:0;}25%{opacity:1;}26%{opacity:0;}100%{opacity:0}}.p8{opacity:0;animation:p8 10s ease ;} @keyframes p8{0%{opacity:0;}26%{opacity:0;}27%{opacity:1;}28%{opacity:0;}100%{opacity:0}}.p9{opacity:0;animation:p9 10s ease ;} @keyframes p9{0%{opacity:0;}28%{opacity:0;}29%{opacity:1;}30%{opacity:0;}100%{opacity:0}}.p10{opacity:1;animation:p10 10s ease ;} @keyframes p10{0%{opacity:0;}30%{opacity:0;}31%{opacity:1;}90%{opacity:1;}100%{opacity:1}}";;
    var total = 0;
    for (i = 0; i < pert.length; i++) {
        total += pert[i];
    }

    function makeStyle(id, cur_angle2, tar_angle) {
        str_stroke = "";
        if (id == 1) {
            str_stroke = "" + tar_angle.toString() + ",";
            rest_angle = 100 - tar_angle;
            str_stroke = str_stroke + rest_angle.toString() + ",0,0";
        } else {
            str_stroke = str_stroke + "0,";
            str_stroke = str_stroke + cur_angle2.toString() + "," + tar_angle.toString() + ",";
            rest_angle = 100 - cur_angle2 - tar_angle;
            str_stroke = str_stroke + rest_angle.toString();
        }

        if (id == 1)
            str_style = str_style + ".pie" + id + "  {opacity:1;stroke: " + color[id - 1] + ";stroke-dasharray:" + str_stroke + "}";
        else
            str_style = str_style + ".pie" + id + "  {opacity:1;stroke: " + color[id - 1] + ";-webkit-animation-name: pie" + id + ";animation-name: pie" + id + ";stroke-dasharray:" + str_stroke + "}";

        str_style = str_style + "@-webkit-keyframes pie" + id + " {0% {stroke-dasharray: 0, 0, 0, 100;}10% {stroke-dasharray: 0, 0, 0, 100;}30% {stroke-dasharray: " + str_stroke + ";}90% {opacity: 1;stroke-dasharray: " + str_stroke + ";}100% {opacity: 1;stroke-dasharray: " + str_stroke + ";}}";
        str_style = str_style + "@keyframes pie" + id + " {0% {stroke-dasharray: 0, 0, 0, 100;}10% {stroke-dasharray: 0, 0, 0, 100;}30% {stroke-dasharray: " + str_stroke + ";}90% {opacity: 1;stroke-dasharray: " + str_stroke + ";}100% {opacity: 1;stroke-dasharray: " + str_stroke + ";}}";
    }

    function makePath(id, alpha, percent) {
        str_circle = str_circle + "<g><circle class='circle pie" + id.toString() + "' cx='32' cy='32' r='16'></circle>";

        x = (r + 6) * Math.sin(alpha * Math.PI / 180) + 32;
        y = (r + 6) * Math.cos(alpha * Math.PI / 180) * (-1) + 32;

        str_line = "<path d='M " + x.toString() + " " + y.toString();

        x = x + 5 * tx;
        y = y + 5 * ty;

        str_line = str_line + " L " + x.toString() + " " + y.toString();

        if (tx > 0)
            x_txt = x + 7 * tx;
        else if (tx < 0)
            x_txt = x + 17 * tx;
        y_txt = y - 1;

        x += 17 * tx;

        str_line = str_line + " L " + x.toString() + " " + y.toString() + "' stroke='" + color[id - 1] + "' stroke-width='1' fill='none'></path>";

        str_txt = "<text text-anchor='start' x='" + x_txt.toString() + "' y='" + y_txt.toString() + "' font-family='Noto Sans JP' font-size='5' stroke='none' stroke-width='0' fill='" + color[id - 1] + "'>" + percent + "%</text>";

        str_circle = str_circle + str_line + str_txt + "</g>";

    }

    var sum_pert = 0;
    sum_angle = 0;
    for (i = 0; i < pert.length; i++) {

        if (i != pert.length - 1)
            pert[i] = Math.round(pert[i] / total * 100);
        else if (i == pert.length - 1)
            pert[i] = 100 - sum_pert;

        angle[i] = 360 * pert[i] / 100;
        sum_angle = sum_angle + angle[i] / 2;

        if (sum_angle <= 90) {
            tx = 1;
            ty = -1;
        } else if (sum_angle <= 180) {
            tx = 1;
            ty = 1;
        } else if (sum_angle <= 270) {
            tx = -1;
            ty = 1;
        } else {
            tx = -1;
            ty = -1;
        }

        makeStyle(i + 1, sum_pert, pert[i]);
        sum_pert += pert[i];

        sum_angle = sum_angle + angle[i] / 2;
        makePath(i + 1, sum_angle - (angle[i] / 2), pert[i]);
    }

    $("#pie").append(str_circle);
    $("#chart_style").append(str_style);

    $("#pie").html($("#pie").html());

    p = 0;
    time = 0;
    delta_t = 200;

    //     function countPercent() {
    //         time += delta_t;

    //         if (time >= 1000 && time <= 3000) {
    //             p += 10;
    //             if (p <= 100)
    //                 $("#percentage").html(p.toString() + "%");
    //             else
    //                 $("#percentage").html("100%");

    //         } else if (time >= 9980) {
    //             time = 0;
    //             p = 0;
    //             $("#percentage").html("0%");
    //         }
    //         setTimeout(countPercent, delta_t);
    //     }
    //     setTimeout(countPercent, delta_t);
});