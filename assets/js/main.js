
var h = document.getElementById("header"),
    stuck = false,
    stickPoint = getDistance(),
    hc = "mini";

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset,
      offset = window.pageYOffset;
  if ( (distance <= 0) && !stuck) {
    h.classList.add(hc);
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.classList.remove(hc);
    stuck = false;
  }
}

// haburger menu
var hamburger = document.getElementById("hamburger"),
    modal = document.getElementById("mobile-menu");
hamburger.onclick = function(){
  a = hamburger.dataset.active;
  "false" != a ? (hamburger.dataset.active="false", modal.dataset.active="false") : (hamburger.dataset.active="true", modal.dataset.active="true");
};
