$(document).ready(function () {
    // var edt;

    $(".at").click(function () {
        var txt = $("#floatingInput").val();
        var lst;
        if (txt != "") {

            lst = $('<li class="list-group-item lis"><input class="form-check-input me-2 mt-2" type="checkbox" value="" aria-label="..."><span>' + txt + '</span><input type="text"><button type="button" class="btn btn-outline-primary edt">Edit</button><button type="button" class="btn btn-outline-primary del">Delete</button></li>');
            $(".tl").append(lst);

        }
        $("#floatingInput").val("");
        // lst.find(".edt").click(function(){
        //     let edt = $(this);
        //     et(edt);
        // })
        // edt = $(".edt");
        // et();
        $(".me-2").click(function () {
            if ($(this).is(':checked')) {
                $(".ct").append($(this).parent());

            }
            else {
                $(".tl").append($(this).parent());
            }
        });

        
        $(".lis").find(".edt").click(function () {

            var txt1 = $(this).prev().prev();
            var int = $(this).prev();

            console.log(txt1.text());
            console.log(int.val());
            if (int.val() == "") {
                int.val(txt1.text());

            }
            else {
                txt1.text(int.val());

                int.val("");
            }

        });


        $(".del").click(function () {
            $(this).parent().remove();
        });
    });
});

    // console.log(edt);


