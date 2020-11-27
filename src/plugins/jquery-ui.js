import "webpack-jquery-ui";
import "webpack-jquery-ui/css";

/**
 * @description Date pickers initialization. Date format added.
 */
(function initDatePickers() {
    $( ".datepicker" ).datepicker({
        dateFormat: "yy-mm"
    }); 
})();
