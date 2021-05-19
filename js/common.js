$(document).ready(function(){
    //브라우저가 로딩이 완료되면 coverstory.html을 가져온다.
    $.ajax({
        url : "coverstory.html",
        post : "post",
        success : function(result){
            $("#content").html(result);
        }
    });

    //coverstory
    $("nav li:eq(0)").click(function(){
        $.ajax({
          url : "coverstory.html",
          post : "post",
          success : function(result){
              $("#content").html(result);
          }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        nav_click();
        return false;
    });

    //characters
    $("nav li:eq(1)").click(function(){
      $.ajax({
        url : "characters.html",
        post : "post",
        success : function(result){
            $("#content").html(result);
        }
      });
      $("nav li").removeClass("active");
      $(this).addClass("active");
      nav_click();
      return false;
  });

    //snapshots
    $("nav li:eq(2)").click(function(){
        $.ajax({
          url : "snapshots.html",
          post : "post",
          success : function(result){
              $("#content").html(result);
          }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        nav_click();
        return false;
    });


    //epilogue

    $("nav li:eq(3)").click(function(){
      $.ajax({
        url : "epilogue.html",
        post : "post",
        success : function(result){
            $("#content").html(result);
        }
      });
      $("nav li").removeClass("active");
      $(this).addClass("active");
      nav_click();
      return false;
  });



    $(".res_btn").click(function(){
        $(".dark_res").addClass("active");
        $("nav").addClass("active");
    });
    $(".dark_res, .close_btn").click(function(){
      $(".dark_res").removeClass("active");
      $("nav").removeClass("active");
    });

    function nav_click(){
      $(".dark_res").removeClass("active");
      $("nav").removeClass("active");
      $("html, body").animate({scrollTop:$("#content").offset().top}, 500);
    };

    





























});