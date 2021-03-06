"use strict";
$(document).ready(function () {
    let selectedTable = null;
    $(document).on("click", ".available", function (e) {
        $(".popup").fadeIn(1000)
        selectedTable = $(e.target);
        $(".formTableNumber").html("Table Number:" + $(e.target).attr('id'));
    });
    $(document).on("click", ".save", function (e) {
        $(selectedTable).removeClass("available").addClass("reserved");
        $(".popup").css("display", "none");
        debugger
        selectedTable
            .attr("name", $("input").eq(0).val())
            .attr("phone", $("input").eq(1).val())
            .attr("size", $("input").eq(2).val());
        $("input").each(function () {
            $(this).val("");
        });

    });
    $(document).on("mouseenter", ".reserved", (event) => {
        console.log('hey')
        if ($(event.target).attr("name") && $(event.target).attr("phone") && $(event.target).attr("size")) {
            $(event.target).append(`
                      <section class="tooltip">
                        Name: ${$(event.target).attr("name")}
                        Phone: ${$(event.target).attr("phone")}
                        Party Size: ${$(event.target).attr("size")}
                      </section>
                      `);

        }
    });


    $(document).on("mouseenter", ".available", function (e) {
        $(e.target).toggleClass("hover")
    })

    $(document).on("mouseleave", ".available", function (e) {
        $(e.target).toggleClass("hover")

        $(".xbutton").on("click", function () {
            $(".popup").remove();
        })
    })
    // //tool tip
    // $(document).on("click", "button", (event) => {
    //     container
    //         .attr("name", $("input").eq(0).val())
    //         .attr("phone", $("input").eq(1).val())
    //         .attr("size", $("input").eq(2).val());
    //     $("input").each(function () {
    //         $(this).val("");
    //     });
    //     $(document).on("mouseenter", ".container", (event) => {
    //         if ($(event.target).attr("name") && $(event.target).attr("phone") && $(event.target).attr("size")) {
    //             $(event.target).append(`
    //       <section class="tooltip">
    //         Name: ${$(event.target).attr("name")}
    //         Phone: ${$(event.target).attr("phone")}
    //         Party Size: ${$(event.target).attr("size")}
    //       </section>
    //       `);

    //     }
    // });

});
