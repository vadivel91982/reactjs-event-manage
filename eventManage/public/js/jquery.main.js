



$(function () {
    "use strict";

    handle_layout();
    handle_right_sidebar();
    // handle_main_menu();



    // handle_forms();


    handle_slimScroll();
    handle_card_actions();
    handle_flot_modals();

});




function handle_layout() {
    $('.theme-switcher input').on('change', function () {
        if ($('.theme-switcher input').prop('checked')) {
            $('.app').toggleClass('theme-dark');
        } else {
            $('.app').toggleClass('theme-dark');
        }
    });
}


function handle_right_sidebar() {

    //    $(document).on("mouseup", function (e) {
    //        var right_sidebar = $('.site-right-sidebar');
    //        if (!right_sidebar.is(e.target) && right_sidebar.has(e.target).length === 0) {
    //            right_sidebar.removeClass('show');
    //        }
    //    });

    $('.link-rightbar').on('click', function () {
        $('.site-right-sidebar').toggleClass('show');
        $('body').toggleClass('modal-opened');
    });

}


// function handle_main_menu() {

//     var linkMainMenu = $('.site-header .link-main-menu');

//     linkMainMenu.on('click', function () {
//         $('.app').toggleClass('menu-hidden');
//     });

//     $(".list-main-menu li.with-sub > a").on("click", function () {
//         if ($(this).parent().hasClass('active')) {
//             $(this).parent().removeClass('active');
//             $(this).parent().find('>ul').slideUp(300, "easeInOutQuart");
//         } else {
//             if (!$(this).parent().parent().closest('.with-sub').length) {
//                 $('.list-main-menu li.with-sub').removeClass('active').find('>ul').slideUp(300, "easeInOutQuart");
//             }
//             $(this).parent().addClass('active');
//             $(this).parent().find('>ul').slideDown(300, "easeInOutQuart");
//         }
//     });


//     // Set menu item active / enable current menu item
//     $('.site-menu ul > li:not(.with-sub)').removeClass('active');
//     var url = window.location;
//     var element = $('.site-menu ul > li > a').filter(function () {
//         return this.href == url || url.href.indexOf(this.href) == 0;
//     });
//     element.parent().addClass('active');

//     $('.site-menu li.with-sub').removeClass('active').find('>ul').hide();
//     var url = window.location;
//     var element = $('.site-menu ul li ul li a').filter(function () {
//         return this.href == url || url.href.indexOf(this.href) == 0;
//     });
//     element.parent().addClass('active');
//     element.parent().parent().parent().addClass('active');
//     element.parent().parent().slideDown();

// }






// function handle_forms() {

//     var formLabel = $('.form-group.modren > label');
//     var formInputs = $('.form-group.modren > .form-control');
//     var formTypeahead = $('.twitter-typeahead > input');

//     formInputs.each(function () {
//         if ($.trim($(this).val()).length !== 0) {
//             $(this).closest('.form-group.modren').find('label').addClass('labelTop');
//         }
//     });

//     formInputs.on('focus', function () {
//         $(this).closest('.form-group.modren').find('label').addClass('labelTop');
//     });

//     formLabel.on('click', function () {
//         console.log('formlabel')
//         $(this).closest('.form-group.modren').find('.form-control').focus();
//         //        $(this).closest('.form-group.modren').find('.selectTwo').select2('open');
//     });


//     formInputs.on('focusout', function () {
//         if ($.trim($(this).val()).length == 0) {
//             $(this).closest('.form-group.modren').find('label').removeClass('labelTop');
//         }
//     });

// }





function handle_slimScroll() {

    if (jQuery().slimScroll) {
        $(".scroller").each(function () {
            $(this).slimScroll({
                size: "5px",
                opacity: "0.6",
                position: $(this).attr("data-position"),
                height: $(this).attr("data-height"),
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });
        });
    }

}


function handle_card_actions() {

    var card_collapse = $('.card .card-actions > li > .card-collapse');
    var card_expand = $('.card .card-actions  > li > .card-expand');
    var card_close = $('.card .card-actions  > li > .card-close');


    /* For Panel Collapse and expend */
    card_collapse.on("click", document, function () {
        var card_body = $(this).closest(".card").find(".card-body");
        var icon = $(this).children('i');

        if (icon.hasClass('zmdi-unfold-less')) {
            icon.toggleClass('zmdi-unfold-less').toggleClass('zmdi-unfold-more');
            card_body.slideToggle(200);
        } else {
            icon.toggleClass('zmdi-unfold-less').toggleClass('zmdi-unfold-more');
            card_body.slideToggle(200);
        }
    });

    /* For Panel full Screen */
    card_expand.on("click", document, function () {
        var card = $(this).parents('.card');
        var card_actions = $(this).closest('.card-actions').find('a').not(this);
        var icon = $(this).children('i');

        if (card.hasClass('card-full-screen')) {
            icon.toggleClass('zmdi-arrow-right-top').toggleClass('zmdi-arrow-left-bottom');
            card.removeClass('card-full-screen');
            card_actions.show();
        } else {
            icon.toggleClass('zmdi-arrow-right-top').toggleClass('zmdi-arrow-left-bottom');
            card_actions.hide();
            card.addClass('card-full-screen');
        }
    });

    /* For Panel Close */
    card_close.on("click", document, function () {
        $(this).parents(".card").remove();
    });

}


function handle_flot_modals() {

    $(document).on('click', '[data-toggle="modal-float"]', function () {
        var target = $(this).data('target');
        $(target).toggleClass('show');
        $('body').addClass('modal-opened');
    });


    $(document).on('click', '[data-dismiss="modal-flot"]', function () {
        $(this).closest('.modal-flot').removeClass('show');
        $('body').removeClass('modal-opened');
    });


    $(document).on('click', '[data-toggle="minimise"]', function () {
        $(this).closest('.modal-flot').toggleClass('minimised');
        $('body').removeClass('modal-opened');
    });


    $(document).on('click', '.modal-flot .sub-contant .btn-sub-close', function () {
        $(this).closest('.modal-contant').find('.sub-contant').removeClass('show');
    });



};
