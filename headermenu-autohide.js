$(function() {
    var scroll = $(document).scrollTop(), // tọa độ hiện tại khi chưa scroll
        headerHeight = $('.header-menu').outerHeight(); // chiều cao header

    $(window).scroll(function() { // bắt sự kiện cuộn trang

        var scrolled = $(document).scrollTop(); // lấy tọa độ mới

        if (scrolled > headerHeight) { // nếu cuộn trang vượt quá header
            $('.header-menu').addClass('off-canvas'); // thì ẩn header
        } else {
            $('.header-menu').removeClass('off-canvas'); // nếu không thì hiện header
        }

        if (scrolled > scroll) { // cuộn trang xuống
            $('.header-menu').removeClass('fixed'); // thì ẩn header
        } else {
            $('.header-menu').addClass('fixed'); // cuộn lên thì lại hiện header
        }

        scroll = $(document).scrollTop(); // gán lại tọa độ mới khi dừng scroll
    });
});
