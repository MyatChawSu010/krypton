$(document).ready(function() {

    let offset = {
        "web" : $("#web").offset().top - 200,
        "app" : $("#app").offset().top - 200,
        "mobile" : $("#mobile").offset().top - 200,
        "contact" : $("#contact").offset().top - 200
    }

    function activeNav(para) {
        $('nav li').removeClass("active");
        $(`#nav-${para}`).addClass("active");
    }

    function loadDiv(para) {
        if(para < offset["web"]) {
            return activeNav("krypton");
        } else if(para > offset["web"] && para < offset["app"]) {
            return activeNav("web");
        } else if(para > offset["app"] && para < offset["mobile"]) {
            return activeNav("app");
        } else if(para > offset["mobile"] && para < offset["contact"]) {
            return activeNav("mobile");
        } else if(para > offset["contact"]) {
            return activeNav("contact");
        }
    }

    $("body").mCustomScrollbar({
        theme:"minimal",
        callbacks:{
            onScroll:function(){
                loadDiv(Math.abs(this.mcs.top));
            }
        }
    });
    
    if(window.innerWidth < 768) {
        $(".form-box").mCustomScrollbar({
            theme:"minimal"
        });
    }

    $("#mouse").click(function() {
        $("body").mCustomScrollbar("scrollTo", $('body').find('.mCSB_container').find('#web'));
    });

    $("nav li").click(function() {
        $("body").mCustomScrollbar("scrollTo", $('body').find('.mCSB_container').find(`#${$(this).attr("mcs-target")}`));
    })
})