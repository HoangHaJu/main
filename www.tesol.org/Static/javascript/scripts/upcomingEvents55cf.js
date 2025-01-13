// This script removes empty section for Upcoming Events block, 
//when there are no events to show.
$(function () {
    $("section.content.component.usn_cmp_upcomingevents .component-inner .container-fluid").each(function (index, element) {
        if ($(element).children().length <= 0) {
            $(element).parents("section.content.component.usn_cmp_upcomingevents").remove();
        }
    });
});