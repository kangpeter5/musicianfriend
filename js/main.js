(function ( $ ) {
    $.fn.get_tabs = function() {
        return this.each(function() {
            var tabs = $(this);
            var list = $(".tab-menu", tabs).children();
            var listlen = list.length;
            var i;
            var j;
            for (i = $(".sale-signup-content", tabs).length, j = listlen; i < j; i++ ) {
                tabs.append('<div class="sale-signup-content"></div>');
            }
            var content = $(".sale-signup-content", tabs);
            // hide all minus 1st .sale-sign-content
            content.slice(1).hide();
             // first .sale-sign-content active by default 
            list.eq(0).addClass("active");
            content.eq(0).addClass("active");

            list.find("a").click(function(e) {
                var tabParent = $(this).parent().index();
                list.removeClass('active').eq(tabParent).addClass('active');
                content.hide().eq(tabParent).show();
            });
        });
    }
}(jQuery));

var acc = document.getElementsByClassName("accordion");
var i;
var acclen = acc.length;

for (i = 0; i < acclen; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}