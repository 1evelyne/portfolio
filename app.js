$(function () {
    $($('ul a')[0].hash).show();
    $('ul a').click(function () {
        $('ul a').each(function (idx, e) {
            this.style["border-bottom"] = "";
            $(this.hash).hide();
        });
        this.style["border-bottom"] = "2px solid white";
        $(this.hash).show();
    });
    $('.fotos img:gt(0)').hide();
    setInterval(function () {
        $('.fotos :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.fotos');
    },
    3000);
    $('.fotografie img:gt(0)').hide();
    setInterval(function () {
        $('.fotografie :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.fotografie');
    },
    5000);
});