// include header and footer
function onLoad() {
    $(function () {
        $("#navbar").load("navbar.html");
        $("#footer").load("footer.html");
    });
}

function onMenuClick() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
}

$("#toggle").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

new WOW().init();
