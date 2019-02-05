"use strict";
$(document).ready(function () {

    $(".table.available").on("click", function (e) {
        $(".popup").css("display", "flex");
        $(".popup").css("position", "absolute");
        let tablenum = $(e.target);
        $(".formTableNumber").append(tablenum.text());
        console.log(tablenum);

    });

    //if available on hover css change and cursor
    $(".table").mouseover(function (e) {
        if ($(e.target).hasClass("available")) {
            $(e.target).css("backgroundColor", "#EEE");
            $(".table").on("mouseout", function (e) {
                $(e.target).css("backgroundColor", "#CCC");
            })
        }

        $(".xbutton").on("click", function(){
            $(".popup").css("display", "none");
        })




    });


    // submitting form will change class to reserved


    // if class == reserved not allowed
















    // let tablenum = $(e.target);
    // $(".tablenumber".append(tablenum.text(){

    // })
    // $("body").off("click", (function() {
    //     console.log("fuck ya");
    // $(".popup").css({"display":"none"});

    // }))

    // $("body").click(function(e) {
    //     $(".table").off("click");



    //     console.log("hey")
    //     if(e.target.id == "nomore"){
    //         $(".popup").hide();
    //     }
    // });







});



// target table on click function {}
// popup css display flex
// popuop css position absolute

// off click targeting popup

// jquery off()