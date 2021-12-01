const toggle = document.getElementById("toggle");
toggle.onclick = function () {
    toggle.classList.toggle("active");
    document.body.classList.toggle('dark_theme');
}
  

  jQuery(document).ready(function () {
    jQuery(".navbar").click(function () {
        var x = jQuery(window).width();
        if (x < 850) {
            jQuery(".minimize").toggle();
        }
    });
});

jQuery(document).resize(function () {
    jQuery(".navbar").click(function () {
        var x = jQuery(window).width();
        if (x < 850) {
            jQuery(".minimize").toggle();
        }
    });
});


jQuery(document).ready(function () {
    jQuery(".post_icon").click(function () {
        jQuery(this).siblings('.index_link').toggle();
    });
});

