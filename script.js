function onFrame(event) {
  onFrameBall(event);
};

function newDestination() {
  return Point.random() * view.size;
}

var score = 0;

var text = new PointText(new Point(10, 20));
text.fillColor = 'black';

text.content = score;

function points() {
   return score ++;
}

function createCircle() {
  var c = new Path.Circle({
    center: Point.random() * view.size,
    radius: 30,
    fillColor: fillColor,
    strokeColor: 'black',
  });

  var fillColor = c.fillColor

  c.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1
  }

  c.onClick = function(event) {
    this.remove();
    circ = createCircle();
    destination = newDestination();
    text.content = points();
  }
  return c;
}

var circ = createCircle();
var destination = newDestination();


function onFrameBall(event) {
  var vector = destination - circ.position;
  circ.position += vector / 13;
  circ.content = Math.random(vector.isZero);
  if (vector.length < 5) {
    destination = newDestination();
  }
};
