function loaded() {
  setInterval(loop, 800)
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
  titleText = ["CHA", "$$", "CHA", "$$", "CHA", "$$", "CHA", "$$", "CHA", "$$", "CHA", "$$"];