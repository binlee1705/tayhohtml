$("#htmlHeader").load('../Header.html')
$("#htmlFooter").load('../Footer.html')
$("#container >.wrp >.colright").load('../ColRight.html')


setTimeout(() => {
    $('#photoAlbumRight .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [10, 10, 10, 10, 10, 10], true, true, true, [1, 4, 3, 2, 1], "", ""));
    });
    $("#linkWebsite select").change(function () {
        var value = $(this).val();
        if (value !== "") window.open(value, '_blank');
    });
    $('#bttop').click(function (e) {
        scrollHead(e);
    });
    $('.openList').click(() => {
        $('#menu').toggleClass('ac');
        $('.openList').toggleClass('ac');
        $('#overlay').fadeToggle();
    });
    $('#overlay').click(function () {
        $('#menu').toggleClass('ac');
        $('.openList').toggleClass('ac');
        $('#overlay').fadeToggle();
    });
    $('.openSub').click(function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('ac');
        $(this).parents('li').toggleClass('ac');
    });
    $("#notifyRight .list").marquee({ duration: 20000, gap: 0, delayBeforeStart: 1000, direction: "up", duplicated: true, pauseOnHover: true, startVisible: true });
}, 1000); 