//create stage for SVG
let dots = new Rune({
  container: "#dotDivider",
  width: 420,
  height: 80,
});

function makeCircles() {
  for (let i = 0; i < 5; i++) {
    stackCircles(40 + i * 85, 40, 40);
  }
}

function stackCircles(x, y) {
  for (let i = 0; i < 4; i++) {
    let radius, clr;
    if (i === 0) {
      radius = 40;
      clr = '#ecf0f1';
    } else if (i === 1) {
      radius = 30;
      clr = '#bdc3c7';
    } else if (i === 2) {
      radius = 20;
      clr = '#95a5a6';
    } else {
      radius = 10;
      clr = '#7f8c8d';
    }
    dots.circle(x, y, radius)
      .stroke(false)
      .fill(clr);
  }
}

makeCircles();

dots.draw();