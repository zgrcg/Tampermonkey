'use strict'

let $ = window.jQuery

const removeElements = [
	'div.updates-banner',
	'div.feedback',
	'div.connect-widget',
	'footer[role="contentinfo"]',
	'div.edit-github',
	'div.body-footer'
]

for (const element of removeElements) { $(element).remove() }
$('.container').removeClass('container').addClass('container-fluid')

