

$(document).ready(function () {
    $("#clkdis").mousedown(function (e) {
        $.ajax({
            type: "GET",
            url: "Homepage.html",
            success: function () {
                $("#print").load("./htmlforms/formdisease.html");
                $("#hide").css('visibility', 'hidden');
                $("#clkdis").removeClass("recbarcursor").addClass("recact");
                $("#clkdet").removeClass("recact").addClass("recbarcursor");
                $("#clkprod").removeClass("recact").addClass("recbarcursor");
            }
        });
    })


});


$(document).ready(function () {
    $("#clkprod").mousedown(function (e) {
        $.ajax({
            type: "GET",
            url: "Homepage.html",
            success: function () {
                $("#print").load("./htmlforms/production.html");
                $("#hide").css('visibility', 'hidden');
                $("#clkdet").removeClass("recact").addClass("recbarcursor");
                $("#clkdis").removeClass("recact").addClass("recbarcursor");
                $("#clkprod").removeClass("recbarcursor").addClass("recact");
               
               
            }
        });
    })


});




