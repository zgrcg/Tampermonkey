// ==UserScript==
// @name          优化 w3schools
// @namespace     http://tampermonkey.net/
// @version       0.1.5
// @description  88888888888888888
// @author       chen guo
// @match         https://www.w3schools.com/*
// @grant         GM_xmlhttpRequest
// @require  	 https://code.jquery.com/jquery-3.7.1.min.js#sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=
// ==/UserScript==

(function () {
    'use strict';

    let $ = window.jQuery

// W3.CSS 变成 <code>W3.CSS</code>

    const removeElements = [
        '#footerwrapper',
        '#right',
        'hr',
        '#footer',
        'form#w3-exerciseform',
        'h2:contains("Exercises")',
        '#getdiploma',
        '#user-profile-bottom-wrapper',
        // try it
        '#tryitLeaderboard',
        '#tryhome',
        '#menuButton',
        '[title="Save code"]',
        '#getwebsitebtn',
        ''
    ]

    removeElements.forEach(function (value) {
        $(value).remove()
    })

    $('#main').css('width', '99%')
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            $('#top-nav-bar, #subtopnav').show()
            $('#leftmenuinner').css('padding-top', '87px')
        } else {
            $('#top-nav-bar, #subtopnav').hide()
            $('#leftmenuinner').css('padding-top', '0')
        }
    });

    // try it
    $('.trytopnav').css('position', 'static')
    $('#container').css('top', '48px')

})();