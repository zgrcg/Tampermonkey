// ==UserScript==
// @name         优化 learn.microsoft.com
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  88888888888888888
// @author       chen guo
// @match        https://learn.microsoft.com/*
// @grant        GM_xmlhttpRequest
// @require  	 https://code.jquery.com/jquery-3.7.1.min.js#sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=
// @require  	 https://www.w3schools.com/lib/w3.js
// ==/UserScript==

(function () {
	'use strict';

	let $ = window.jQuery

	const removeElements = [
		'div#disclaimer-holder',
		'div#user-feedback',
		'ul.links',
		'div.ccpa-privacy-link',
		'div.alert',
		'#main > div.content > p:last-child'
	]

	for (const element of removeElements) { $(element).remove() }
	$('#footer').css('padding', '0')

})();