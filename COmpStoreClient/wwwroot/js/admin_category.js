﻿$(document).ready(function () {
    // Delete selected rows
    $('#btn_delete').click(function () {
        bootbox.confirm({
            message: "Thao tác này sẽ xóa các sản phẩm và dữ liệu có liên quan và không thể khôi phục, bạn có chắc chắn muốn xóa?",
            buttons: {
                confirm: {
                    label: 'Có',
                    className: 'btn-danger'
                },
                cancel: {
                    label: 'Không',
                    className: 'btn-default'
                }
            },
            callback: function (result) {
                if (result) {
                    var ids = [];
                    $('#content_table tbody tr.active').each(function () {
                        ids.push($(this).data('id'));
                    });
                    $.ajax({
                        url: '/AdminCategory/Delete',
                        type: 'post',
                        data: { 'ids': ids },
                        success: function (result) {
                            if (result === true) {
                                $('#content_table tbody tr.active').each(function () {
                                    $(this).hide(600).promise().done(function () {
                                        $(this).remove();
                                    });
                                });
                                $('#btn_delete').addClass('disabled');
                            }
                            else {
                                bootbox.alert("Có lỗi xảy ra. Liên hệ quản trị viên để biết thêm chi tiết!");
                            }
                        }
                    });
                }
            }
        });
    });
});