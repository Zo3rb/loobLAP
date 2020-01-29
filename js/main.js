/* global console, alert, confirm, prompt, evil is true */

var navBar = document.getElementsByClassName("nav-item");


window.onscroll = function () {

    "use strict";

    if (window.pageYOffset >= 0 && window.pageYOffset <= 640) {
        navBar[0].classList.add("active");
    } else {
        navBar[0].classList.remove("active");
    }

    if (window.pageYOffset >= 642 && window.pageYOffset <= 1419) {
        navBar[1].classList.add("active");
    } else {
        navBar[1].classList.remove("active");
    }

    if (window.pageYOffset >= 1421 && window.pageYOffset <= 2195) {
        navBar[2].classList.add("active");
    } else {
        navBar[2].classList.remove("active");
    }

    if (window.pageYOffset >= 2197 && window.pageYOffset <= 2795) {
        navBar[3].classList.add("active");
    } else {
        navBar[3].classList.remove("active");
    }

    function myFunction() {

        var seconds = 140;
        if (seconds > 0) {
            seconds -= 1;
        }
    }

};