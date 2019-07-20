$(document).ready(function() {
    $('.your-class').slick({
        // dots: true,
        // infinite: true,
        // speed: 500,
        // fade: true,
        // cssEase: 'linear'
        //slidesToShow: 3,
        //slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
        focusOnSelect: true,
        speed: 5000
    });
    // $("h1").animate({
    //     function() {
    //         $(this).css("backgroundColor", "black");
    //     }

    // function animateMydiv() {
    //     $("div#home").animate({
    //             left: '250px'
    //         }, 5000,

    //         function() {
    //             $("div#home").animate({
    //                 'left': '0px'
    //             }, 9000, animateMydiv);
    //         });
    // }); animateMydiv();



    // $("div#home").animate({
    //     // backgroundImage: 'url(./realest.jpg)',
    //     //backgroundColor: "#0078ff",
    //     left: '250px'
    // }, 6000);




    // $("p:first").mouseenter(function() {
    //     $(this).toggle();
    //     alert("its hidden!");
    // });

    //     $("p:first").hover(function() {
    //             $("p.lead").toggle();
    //             //alert("its hidden!");
    //         },
    //         function() {
    //             $("p.lead").toggle();
    //             // alert("its hidden!");
    //         });

    $(".dropdown-item").hover(
        function() {
            $(this).css("backgroundColor", "#0078ff");
        },
        function() {
            $(this).css("backgroundColor", "#060e18");
        }
        //alert("its hidden!");
    );


    $(".nav-item.dropdown").mouseenter(
        function() {
            $(".dropdown-menu").show("fast");
        });
    $(".nav-item.dropdown").mouseleave(
        function() {
            $(".dropdown-menu").hide("fast");
        }
    );
    // $(".nav-item.dropdown").click(
    //     function() {
    //         $(".dropdown-menu").slideToggle("slow");
    //     }
    // );
    $(".nav-item.dropdown").click(function() {
        $(".dropdown-menu").slideToggle("fast");
    });
    // $(".nav-item.dropdown").on({
    //     hover: function() {
    //         function() {
    //             $(".dropdown-menu").show();
    //         },
    //         function() {
    //             $(".dropdown-menu").hide();

    //             //alert("its hidden!");

    //         });
    // });


});