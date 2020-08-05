


var EndUsser = function() {
    
    "use strict";

    var handle_data_table = function() {
        
        $('.table-endUser').DataTable({
            iDisplayLength: 10,
            oLanguage: {
                "sLengthMenu": "_MENU_ Rows",
                "sSearch": ""                
            },
            aLengthMenu: [
                [5, 10, 15, 20, 50, -1],
                [5, 10, 15, 20, 50, "All"]
            ],
            columnDefs: [
                {orderable: false, targets: -1 }
            ]
            
        });
        $('.dataTables_filter input').attr("placeholder", "Search...");
        
    };
    
    
    
    return {
        init: function() {
            handle_data_table();
        }
    };
}();



var Categories = function() {
    
    "use strict";
    
    var handle_creat_new = function() {
        
        var icon = $('.modal-newCategory .modal-body .list-Category-icon a');
        
        icon.on('click', function () {
            
            var color = $('.modal-newCategory .modal-body .text-categoryBG').val().replace('#', '');;
            
            if ( color === '' ) {
                
                $('.modal-newCategory .modal-body .text-categoryBG').closest('.form-group').addClass('hasError');
                
            } else {
                $('.modal-newCategory .modal-body .list-Category-icon a').removeClass('selected');
                $('.modal-newCategory .modal-body .list-Category-icon a').css('background-color', '#FFFFFF');
                $('.modal-newCategory .modal-body .text-categoryBG').closest('.form-group').removeClass('hasError');
                $(this).addClass('selected');
                $(this).css('background-color', '#'+color);
            }
            
        });

        
    };
    
    var handle_data_table = function() {
        
        $('.table-categories').DataTable({
            iDisplayLength: 10,
            oLanguage: {
                "sLengthMenu": "_MENU_ Rows",
                "sSearch": ""                
            },
            aLengthMenu: [
                [5, 10, 15, 20, 50, -1],
                [5, 10, 15, 20, 50, "All"]
            ],
            columnDefs: [
                {orderable: false, targets: -1 }
            ]
            
        });
        $('.dataTables_filter input').attr("placeholder", "Search...");
        
    };
    
    
    
    return {
        init: function() {
            handle_creat_new();
            handle_data_table();
        }
    };
}();
