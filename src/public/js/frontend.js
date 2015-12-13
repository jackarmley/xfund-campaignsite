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
}

/**
 * Init
 */
app.menuToggle();
