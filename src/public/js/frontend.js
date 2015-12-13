var app = app || {};

/**
 * Nav toggle
 */
app.menuToggle = function() {
    var trigger = document.querySelector('.page-nav-trigger'),
        target = document.querySelector('.page-nav'),
        triggerText = {
            inActive : trigger.innerHTML,
            active : 'x'
        },
        active = false,
        activeClass = 'is--active';
    trigger.addEventListener('click',function(e){
        if(active){
            active = false;
            target.classList.remove(activeClass);
            this.innerHTML = triggerText.inActive;
        } else{
            active = true;
            target.classList.add(activeClass);
            this.innerHTML = triggerText.active;
        }
    });
};

/**
 * Follow nav
 */
app.followNav = function() {
    var nav = document.querySelector('.page-header'),
        navHeight = nav.clientHeight,
        content = document.querySelector('.page-content');
        scrollLevel = 0,
        compactClass = 'page-header--compact';
    console.log(content.style.paddingTop);
    window.addEventListener('scroll', function() {
        setInterval(
            function() {
                scrollLevel = window.scrollY;
                if(scrollLevel > navHeight){
                    nav.classList.add(compactClass);
                    content.setAttribute('style', 'padding-top:' + navHeight + 'px');
                }else{
                    nav.classList.remove(compactClass);
                    content.removeAttribute('style');
                }
            },
            500
        );
    });
};

/**
 * Init
 */
app.menuToggle();
if(!Modernizr.touchevents) {
    app.followNav();
}
