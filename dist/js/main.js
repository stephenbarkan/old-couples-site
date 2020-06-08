var $htmlTag = document.documentElement;
var $headerTag = document.querySelector('nav');
var $headerHeight;
window.addEventListener('scroll', function () {
  $headerHeight = $headerTag.clientHeight + "px";
  $htmlTag.style.setProperty("--headerHeight", $headerHeight);
});