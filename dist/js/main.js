var $htmlTag = document.documentElement;
var $headerTag = document.querySelector('nav');
window.addEventListener('scroll', function () {
  $htmlTag.style.setProperty("--headerHeight", $headerTag.clientHeight + "px");
});