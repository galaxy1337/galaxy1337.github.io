function loaded() {
  setInterval(loop, 300)
}

function loop() {
  document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
  loaded()
}) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
  loaded()
});
var x = 0,
  titleText = ["G", "GA", "GAL", "GALA", "GALA", "GALAX", "GALAXY", "|GALAXY|", "GALAXY", "GALAX", "GALA", "GAL", "GA", "G"];