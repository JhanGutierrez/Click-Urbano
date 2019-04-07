$(function(){

    /*$(".box-hidden").slice(0, 0).show();
    $("#loadMore").on('click',function(e){
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 3).slideDown();
        if($(".box-hidden:hidden").length == 0){
            $("#load").fadeOut('slow');
        }

        $('html,body').animate({
            screollTop: $(this).offset().top
        }, 1500);
    });*/



    $(document).ready(function(){

        var showMenu = false;

        $(".btn-filter").click(function(){
            var filter= $(this).attr("data-filter");
            if(filter == "all"){
                $(".img-s").show(500);
            }else{
                $(".img-s").not("."+filter).hide(500);
                $(".img-s").filter("."+filter).show(500);
            }
        });




        $(".burger").click(function(){

            menuOn();
        });


        function menuOn(){
            $(".burger").toggleClass("burgertoggle");
            showMenu = !showMenu;
            if(showMenu){
                $(".menu").css("left","0");
                $(".burger div").css("background", "#fff");
                $(".burger").css("position","fixed");
            }else{
                $(".burger").css("position","absolute");
                $(".burger div").css("background", "#000");
                $(".menu").css("left","100%");
            }
        }

        $(".menu a").click(function(){
            menuOn();
        });


        $(".img-g").click(function(){
            var img = $(this).attr("src");
            $(".modal").css("visibility","visible");
            $(".modal").css("opacity","1");
            $("#img-modal").attr("src",img);
        });

        $("#close-modal").click(function(){
            $(".modal").css("visibility","hidden");
            $(".modal").css("opacity","0");
        });

        $(document).keyup(function(e) {
            if (e.key === "Escape") { 
                alert();
           }
       });

        $(".btn-filter").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });

        $(window).scroll(function(){
            if($(window).scrollTop() > 200){
                $(".scroll-top").fadeIn();
            }else{
                $(".scroll-top").fadeOut();
            }
        });

        $(".scroll-top").click(function(){
            $("html, body").animate({scrollTop:0},800);
        });

    });


}())