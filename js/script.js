$(document).ready(function() {

    let offset = {
        "web" : $("#web").offset().top - 200,
        "app" : $("#app").offset().top - 200,
        "mobile" : $("#mobile").offset().top - 200,
        "contact" : $("#contact").offset().top - 100
    }

    function activeNav(para) {
        $('nav li').removeClass("active");
        $(`#nav-${para}`).addClass("active");
        $(".nav-index").html(para);
    }

    function loadDiv(para) {
        if(para < offset["web"]) {
            return activeNav("intro");
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

    function isTouch() {
        return "ontouchstart" in window;
    }

    function hashLoader() {
        if(window.innerWidth > 767 && !isTouch()) {
            $("body").mCustomScrollbar("scrollTo", $('body').find('.mCSB_container').find(window.location.hash));
        } else {
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top
            }, 1000);
        }
    }

    if(window.innerWidth > 767 && !isTouch()) {
        $("body").mCustomScrollbar({
            theme:"minimal",
            callbacks:{
                onScroll:function(){
                    loadDiv(Math.abs(this.mcs.top));
                }
            }
        });
    } else {
        $(document).scroll(function() {
            loadDiv($(this).scrollTop());
        })
    }
    
    if(window.innerWidth < 768) {
        $(".form-box").mCustomScrollbar({
            theme:"minimal"
        });
    }

    $("#mouse").click(function() {
        if(window.innerWidth > 767 && !isTouch()) {
            $("body").mCustomScrollbar("scrollTo", $('body').find('.mCSB_container').find('#web'));
        } else {
            $('html, body').animate({
                scrollTop: $('#web').offset().top
            }, 1000);
        }
    });

    $(".mcs-target").click(function() {
        if(window.innerWidth > 767 && !isTouch()) {
            $("body").mCustomScrollbar("scrollTo", $('body').find('.mCSB_container').find(`#${$(this).attr("mcs-target")}`));
        } else {
            $('html, body').animate({
                scrollTop: $(`#${$(this).attr("mcs-target")}`).offset().top
            }, 1000);
        }
    });

    window.addEventListener('hashchange', function(event) {
        event.preventDefault();
        hashLoader();
    })

    if(window.location.hash !== "") {
        hashLoader();
    }

    // type me 
    let type = document.querySelectorAll(".type-me");

    function typeTxt(param, node) {
        let txt = param;
        let txtLength = param.length;
        setTimeout(function() {
            if(node.innerHTML.length !== txtLength) {
                node.innerHTML = node.innerHTML + txt[node.innerHTML.length];
                typeTxt(txt, node);
            } else {
                node.classList.add('type-done')
            }
        }, 100);
    }

    for(let i=0; i<type.length; i++) {
        let txt = type[i].innerHTML;
        type[i].innerHTML = "";
        typeTxt(txt, type[i]);
    }
    
})