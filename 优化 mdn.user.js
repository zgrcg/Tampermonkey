// ==UserScript==
// @name         优化 mdn
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  88888888888888888
// @author       chen guo
// @match        https://developer.mozilla.org/*
// @grant        GM_xmlhttpRequest
// @require  	 https://code.jquery.com/jquery-3.7.1.min.js#sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=
// @require  	 https://www.w3schools.com/lib/w3.js
// ==/UserScript==

(function () {
	'use strict';
    
	let $ = window.jQuery

	const removeElements = [
        'div.top-banner',
        'div.notecard',
        'aside.metadata',
        'footer#nav-footer'
	]

	for (const element of removeElements) { $(element).remove() }
	$('div.sticky-header-container').css('position', 'static')

})();