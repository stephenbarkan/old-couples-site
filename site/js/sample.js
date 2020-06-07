const $htmlTag = document.documentElement
const $headerTag = document.querySelector('nav')


window.addEventListener('scroll', () => {
	$htmlTag.style.setProperty("--headerHeight", $headerTag.clientHeight + "px")
 })