$(function() {

    function subcategory_change() {
        var category_id = $("#category").val();
        console.log("category_id: " + category_id);
        // get list of subcategories
        $.ajax({
            type: "GET",
            url: "/category/" + category_id
        }).done(function(data) {
            console.log("data: " + data.subcategories);
            $("#subcategory").empty();
            // special case, when there' category 0, or text '---'
            if($("#category").hasClass("category-filter")) {
                $("#subcategory").append(
                    $("<option></option>").attr("value", "0").text(" --- ")
                );
            }
            $.each(data.subcategories, function(index, value) {
                $("#subcategory").append(
                    $("<option></option>").attr("value", value[0]).text(value[1])
                );
            });
        });
    }

    $("#category").change(function() {
        subcategory_change();
    });

    subcategory_change();
});