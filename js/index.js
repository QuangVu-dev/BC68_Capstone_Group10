window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("site-header").style.height = "70px";
  } else {
    document.getElementById("site-header").style.height = "90px";
  }
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navigation").style.padding = "0.5rem 1rem";
    document.getElementById("site-header").style.boxShadow =
      "0px 3px 6px 0px rgba(0, 0, 0, 0.05";
    document.getElementById("site-header").style.backgroundColor = "#fff";
  } else {
    document.getElementById("navigation").style.padding = "1.2rem 1rem";
    document.getElementById("site-header").style.padding = "none";
    document.getElementById("site-header").style.backgroundColor =
      "transparent";
  }
}
