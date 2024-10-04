var tl = gsap.timeline();
tl.from(".line h1", {
  y: 100,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.4,
});
tl.from(".line1-part1, .line h2", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector(".line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 25);
  },
});
tl.to(".loader", {
  opacity: 0,
  duration: 0.3,
  delay: 2.4,
});
tl.from(".page1",{
    y:1400,
    opacity:0,
    duration: 0.8,
    delay:0.5
})
tl.to(".loader",{
    display: "none"
})
