$(document).ready(function () {
    // var edt;

    function edit() {

        var txt1 = $(this).prev().prev();
        var int = $(this).prev();

        // console.log(txt1.text());
        // console.log(int.val());
        if (int.val() == "") {
            int.val(txt1.text());

        }
        else {
            txt1.text(int.val());

            int.val("");
        }


    };


    $(".at").click(function () {
        var txt = $("#floatingInput").val();
        var lst;
        if (txt != "") {
            var editBtn = $('<button type="button" class="btn btn-outline-primary edt">Edit</button>')
            var delBtn = $('<button type="button" class="btn btn-outline-primary del">Delete</button>')
            lst = $('<li class="list-group-item lis"><input class="form-check-input me-2 mt-2" type="checkbox" value="" aria-label="..."><span>' + txt + '</span><input type="text"></li>');
            lst.append(editBtn, delBtn);
            $(".tl").append(lst);

            $(editBtn).on('click' , edit);


        }
        $("#floatingInput").val("");
        // lst.find(".edt").click(function(){
        //     let edt = $(this);
        //     et(edt);
        // })
        // edt = $(".edt");nclick="myFunction()"
        // et();
        $(".me-2").click(function () {
            if ($(this).is(':checked')) {
                $(".ct").append($(this).parent());

            }
            else {
                $(".tl").append($(this).parent());
            }
        });


        // $(".lis").find(".edt").click(function () {

        //     var txt1 = $(this).prev().prev();
        //     var int = $(this).prev();

        //     console.log(txt1.text());
        //     console.log(int.val());
        //     if (int.val() == "") {
        //         int.val(txt1.text());

        //     }
        //     else {
        //         txt1.text(int.val());

        //         int.val("");
        //     }

        // });





        $(".del").click(function () {
            $(this).parent().remove();
        });
    });




});


