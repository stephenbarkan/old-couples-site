const $htmlTag = document.documentElement
const $headerTag = document.querySelector('nav')
let $headerHeight


window.addEventListener('scroll', () => {
	$headerHeight = $headerTag.clientHeight + "px"
	$htmlTag.style.setProperty("--headerHeight", $headerHeight )
 })