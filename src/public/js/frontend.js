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

app.counter = function(yr,m,d) {
    // @src:
    // http://www.javascriptkit.com/script/script2/count2.shtml
    var current ="We've launched!"
    var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

        theyear=yr;themonth=m;theday=d
        var elem = document.querySelector("#join-us .shard-heading");
        var today=new Date()
        var todayy=today.getYear()
        if (todayy < 1000)
        todayy+=1900
        var todaym=today.getMonth()
        var todayd=today.getDate()
        var todayh=today.getHours()
        var todaymin=today.getMinutes()
        var todaysec=today.getSeconds()
        var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
        futurestring=montharray[m-1]+" "+d+", "+yr
        dd=Date.parse(futurestring)-Date.parse(todaystring)
        dday=Math.floor(dd/(60*60*1000*24)*1)
        dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
        dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
        dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
        if(dday==0&&dhour==0&&dmin==0&&dsec==1){
        document.forms.count.count2.value=current
        return
        }
        else
            elem.innerHTML = "In " + dday+ " days, "+dhour+" hours, "+dmin+" minutes, and " + dsec + " seconds...";
        //setTimeout("this(theyear,themonth,theday)",1000)
};

/**
 * Init
 */

app.counter(2016,01,20);

setInterval(
function () {
    app.counter(2016,01,20)
}, 1000 );

// app.menuToggle();
// if(!Modernizr.touchevents) {
//     app.followNav();
// }
