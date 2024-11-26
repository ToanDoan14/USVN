$(document).ready(function () {
    // Khi click vào button dropdown, toggle (hiện/ẩn) menu
    $('.select-btn').click(function () {
        $('.select-menu').toggleClass('show');
    });

    // Đóng dropdown khi click ra ngoài
    $(document).click(function (event) {
        if (!$(event.target).closest('.select-menu').length) {
            $('.select-menu').removeClass('show');
        }
    });

    
});
