$(document).ready(function () {
  
        
    
    $(".linkNav").click(function(){
        let attrLink=$(this).attr("data");
        $(".angle-up").hide();
        $(".angle-down").show();
        $(".secound-nav").hide();
        $("#secound-"+attrLink).show();
        $(".angle-up-"+attrLink).show();
        $(".angle-down-"+attrLink).hide();
    })

    $(document).mouseup(function(e) {
        var container = $(".linkNav");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".secound-nav").hide();
            lestSchoolOpen = "none";
            $(".angle-up").hide();
            $(".angle-down").show();
        }
    });
    $("#bars").click(
        function(){
            let nav =$(".side-nav").css("left");
if(nav < 0 +"px"){
    $(".side-nav").animate({left:0 +"px"},1000)
     nav ="0px";
}else{
    $(".side-nav").animate({left:-700 +"px"},1000)
    nav ="700px";
}
        }
        )

});
