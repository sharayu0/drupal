$(document).ready(function () {
    $(".navbar").click(function () {
        var x = $(window).width();
        if (x < 768) {
            $(".minimize").toggle();
        }
    });
});

$(document).resize(function () {
    $(".navbar").click(function () {
        var x = $(window).width();
        if (x < 768) {
            $(".minimize").toggle();
        }
    });
});