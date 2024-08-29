//function for checking whether the element has particular class or not
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;

    //return true if the element has the class
    //return flase if the class not found
}

/* fixed header menu scrolling functionality start */
window.addEventListener('scroll', headerContainerStickyHeader)

function headerContainerStickyHeader() {
    var headerContainer = document.getElementsByClassName('header-container')[0];
    var languageSelector = document.getElementsByClassName('language-selector')[0];
    var languageSelectorHeight = languageSelector.offsetHeight;

    var getWidth = window.innerWidth;

    if (headerContainer && getWidth > 1024) {
        if (languageSelectorHeight < window.pageYOffset) {
            headerContainer.classList.add('desktop-fixed-navbar');
        } else if (languageSelectorHeight > window.pageYOffset) {
            headerContainer.classList.remove('desktop-fixed-navbar');
        }
    }
}
/* fixed header menu scrolling functionality end */

function toggle_visibility() {
    var navBar = document.getElementsByClassName('formobile')[0];
    var iconMenu = document.getElementsByClassName('menu-icon')[0];
    var locale = document.getElementsByClassName('external')[0];
    var mobilenav = document.getElementsByClassName('navbar-header')[0];
    if (hasClass(locale, 'external')) {
        if (hasClass(iconMenu, 'icon-menu')) {
            iconMenu.classList.add("icon-close");
            iconMenu.classList.remove("icon-menu");
            document.getElementsByTagName('body')[0].style.position = 'fixed';
        } else {
            iconMenu.classList.add("icon-menu");
            iconMenu.classList.remove("icon-close");
            document.getElementsByTagName('body')[0].style.position = null;
        }
    }
    if (!hasClass(navBar, 'ph-mobile-navigation')) {
        navBar.classList.add("ph-mobile-navigation");
        document.getElementsByTagName('body')[0].style.position = 'hidden';
        mobilenav.classList.add("mobilenavactive");
        //document.getElementsByTagName('body')[0].style.left= '80%';
        //document.getElementsByTagName('body')[0].style.position= 'relative';
        //document.getElementsByTagName('body')[0].style.overflow= 'hidden';

    } else {
        navBar.classList.remove("ph-mobile-navigation");
        document.getElementsByTagName('body')[0].style.position = null;
        mobilenav.classList.remove("mobilenavactive");
        //document.getElementsByTagName('body')[0].style.left= null;
        //document.getElementsByTagName('body')[0].style.position= null;
        //document.getElementsByTagName('body')[0].style.overflow= null;

    }
}
window.onresize = function() {
        if (window.innerWidth >= 1024) {
            var navBar = document.getElementsByClassName('ph-navigation')[0];
            if (hasClass(navBar, 'ph-mobile-navigation')) {
                navBar.classList.remove("ph-mobile-navigation");
            }
            //removing body styles if you resizes window from <768 (with menu open) to >=768
            document.getElementsByTagName('body')[0].style.left = null;
            document.getElementsByTagName('body')[0].style.position = null;
            document.getElementsByTagName('body')[0].style.overflow = null;
        }
    }
    /*Fixing Header on scroll*/

window.onscroll = function() {
    if (window.innerWidth <= 767) {
        var jobTitle = document.getElementsByClassName('well')[0];
        var header_ele = document.getElementsByTagName('header')[0];

        if (typeof(jobTitle) != 'undefined') {
            if (document.getElementsByClassName('banner-block').length) {
                var scrollLength = document.getElementsByClassName('banner-block')[0].getBoundingClientRect().bottom;
            }
            if (scrollLength <= 70) {
                jobTitle.classList.add("mobile-fixed-header");
            } else {
                jobTitle.classList.remove("mobile-fixed-header");
            }
        }
        //Fix header in mobiles
        var scrollLengthHeader = document.body.scrollTop
        if (scrollLengthHeader > 30) {
            header_ele.classList.add("mobile-fixed-top-header")
        } else {
            header_ele.classList.remove('mobile-fixed-top-header');
        }

    } else {
        var jobTitle = document.getElementsByClassName('well')[0];
        if (document.getElementsByClassName('banner-block').length) {
            var scrollLength = document.getElementsByClassName('banner-block')[0].getBoundingClientRect().bottom;
        }
        if (typeof(jobTitle) != 'undefined') {
            if (scrollLength <= 20) {
                jobTitle.className = "desktop-fixed-header well"
            } else {
                jobTitle.className = "well"
            }
        }
    }


}


var scrollTop = 0;
var navbar = document.querySelector('header');

function navbarCollapsed() {
    var currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop, // navbar.scrollHeight,
        windowScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
        bodyEle = document.querySelector('body');

    if (Math.abs(currentScrollTop - scrollTop) > navbar.offsetHeight && (currentScrollTop > scrollTop) && windowScrollTop >= 0 && windowScrollTop <= (bodyEle.offsetHeight - window.outerHeight)) {

        // Scrolling Up.
        navbar.classList.add('navbar-collapsed')
        scrollTop = currentScrollTop;

    } else if (currentScrollTop <= scrollTop && windowScrollTop >= 0 && windowScrollTop <= (bodyEle.offsetHeight - window.outerHeight)) {

        // Scrolling Down.
        navbar.classList.remove('navbar-collapsed');
        scrollTop = currentScrollTop;
    }
};



// scroll page to email widget on click of the email icon 

function ScrollToEmailWidget(alignToTop) {
    var emailIcon = document.getElementById("EmailThisWidget");
    emailIcon.scrollIntoView(alignToTop);
}

// Scrolling to categories widget 

function gotoCategories() {

    if (document.querySelectorAll("[data-widget^='ph-category-overview-']").length) {
        var ele = document.querySelectorAll("[data-widget^='ph-category-overview-']")[0];
        ele.scrollIntoView()
    }
}

//scroll 
function gotoDisLocations() {

    if (document.querySelectorAll("[data-widget^='ph-location-overview-']").length) {
        var ele = document.querySelectorAll("[data-widget^='ph-location-overview-']")[0];
        ele.scrollIntoView()
    }
}
/* END */
window.onscroll = function() {
        backToTopBtn();
        navbarCollapsed();
    }
    /* Back to Top Functionality Start */
function backToTopBtn() {
    var goToTop = document.getElementById("back-to-top");
    if (goToTop) {
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollHeight > 150) {
            goToTop.classList.add("show");
            goToTop.classList.remove("hide");
        } else {
            goToTop.classList.add("hide");
            goToTop.classList.remove("show");
        }
    }
}

function scrollWindow() {
    window.scrollTo(0, 0);
}

/* Back to Top Functionality End */
function slideFunction(obj) {
    var getTargetDiv = obj.parentNode.parentNode.parentNode;
    if (!hasClass(getTargetDiv, 'slideAnim')) {
        getTargetDiv.classList.add("slideAnim");
    } else {
        getTargetDiv.classList.remove("slideAnim");
    }
}

function goDoSomething(val){
    var dropdownone = document.getElementById("Learn_About_CGM_dropdown");
    var dropdowntwo = document.getElementById("Products_dropdown");
    var dropdownthree = document.getElementById("warrior_Community_dropdown");
    var dropdownfour = document.getElementById("support_dropdown");    
    var dropdownfive = document.getElementById("careers_dropdown");   

if(val == "first") {
    if (dropdownone.classList) { 
        dropdownone.classList.toggle("showmenu");
      }
}
if(val == "second") {
    if (dropdowntwo.classList) { 
        dropdowntwo.classList.toggle("showmenu");
      }
}
if(val == "third") {
    if (dropdownthree.classList) { 
        dropdownthree.classList.toggle("showmenu");
      }
}
if(val == "fourth") {
    if (dropdownfour.classList) { 
        dropdownfour.classList.toggle("showmenu");
      }
}
if(val == "fifth") {
    if (dropdownfive.classList) { 
        dropdownfive.classList.toggle("showmenu");
      }
}

};


function goBackItem(val){
    var dropdownoneb = document.getElementById("Learn_About_CGM_dropdown");
    var dropdowntwob = document.getElementById("Products_dropdown");
    var dropdownthreeb = document.getElementById("warrior_Community_dropdown");
    var dropdownfourb = document.getElementById("support_dropdown"); 
    var dropdownfifth = document.getElementById("careers_dropdown"); 
    
if(val == "first") {
    if (dropdownoneb.classList.contains('showmenu') === true) {
        dropdownoneb.classList.remove('showmenu');
      } else {
        dropdownoneb.classList.add('showmenu');
      }
}
if(val == "second") {
    if (dropdowntwob.classList.contains('showmenu') === true) {
        dropdowntwob.classList.remove('showmenu');
      } else {
        dropdowntwob.classList.add('showmenu');
      }
   }
if(val == "third") {
    if (dropdownthreeb.classList.contains('showmenu') === true) {
        dropdownthreeb.classList.remove('showmenu');
      } else {
        dropdowntwob.classList.add('showmenu');
      }
   }
   if(val == "fourth") {
    if (dropdownfourb.classList.contains('showmenu') === true) {
        dropdownfourb.classList.remove('showmenu');
      } else {
        dropdownfourb.classList.add('showmenu');
      }
   }
   if(val == "fifth") {
    if (dropdownfifth.classList.contains('showmenu') === true) {
        dropdownfifth.classList.remove('showmenu');
      } else {
        dropdownfifth.classList.add('showmenu');
      }
   }

}
