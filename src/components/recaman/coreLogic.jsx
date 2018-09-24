let numbers = [];
let count = 1;
let sequence = [];
let index = 0;
let biggest = 0;
let arcs = [];
const backgroundColor = [189, 213, 234];
const lineColor = [255, 51, 102];

let limit = 0;
let shape = "circle";

class Arc {
  constructor(start, end, dir) {
    this.start = start;
    this.end = end;
    this.dir = dir;
  }

  show(p) {
    // diameter = next-index
    // x = next + index /2
    let diameter = Math.abs(this.end - this.start);
    let x = (this.end + this.start) / 2;
    p.stroke(lineColor[0], lineColor[1], lineColor[2]);
    p.noFill();
    // p.strokeWeight(
    //   1 / (Math.abs(count - p.width) === 0) ? 1 : Math.abs(count - p.width)
    // );
    p.strokeWeight(1 / 5);
    if (this.dir === 0) p.arc(x, 0, diameter, diameter, p.PI, 0);
    else p.arc(x, 0, diameter, diameter, 0, p.PI);
  }
}

class Line {
  constructor(start, end, dir) {
    this.start = start;
    this.end = end;
    this.dir = dir;
  }
  show(p) {
    let distanceX = Math.abs(this.end - this.start) / 2;
    let x = (this.end + this.start) / 2;
    p.stroke(lineColor[0], lineColor[1], lineColor[2]);
    p.noFill();
    p.strokeWeight(1 / 5);
    if (this.dir === 0) {
      p.line(this.start, 0, x, -distanceX);
      p.line(x, -distanceX, this.end, 0);
    } else {
      p.line(this.start, 0, x, distanceX);
      p.line(x, distanceX, this.end, 0);
    }
  }
}

function deviceConfig(p) {
  if (p.windowWidth < 768) {
    // iPad or mobile
    p.translate(p.width / 2, 2);
    p.rotate(p.PI / 2);
  } else {
    // Desktop
    p.translate(10, p.height / 2);
  }
}

function step(p) {
  let next = Math.abs(index - count);
  if (numbers[next] || next <= 0) {
    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);

  if (shape === "circle") {
    let arc = new Arc(index, next, count % 2);
    arcs.push(arc);
  } else {
    let line = new Line(index, next, count % 2);
    arcs.push(line);
  }

  //   let x = (next + index) / 2;

  //   p.stroke(lineColor);
  //   p.noFill();
  //   if (count % 2 == 0) p.arc(x, p.height / 2, diameter, diameter, Math.PI, 0);
  //   else p.arc(x, p.height / 2, diameter, diameter, 0, Math.PI);

  if (index > biggest) biggest = index + 2;
  if (next > biggest) biggest = next + 2;
  // console.log("index=" + index);
  // console.log("next=" + next);
  // console.log("biggest=" + biggest);
  index = next;
  count++;
}

export default function sketch(p) {
  p.setup = function() {
    if (p.windowWidth <= 1024) {
      p.createCanvas(p.windowWidth / 1.2, p.windowHeight / 2);
    } else {
      p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
    }
    p.background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  };

  p.windowResized = function() {
    if (p.windowWidth < 768) {
      p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    } else {
      p.resizeCanvas(p.windowWidth / 2, p.windowHeight / 2);
    }
    p.background(0);
    p.myCustomRedrawAccordingToNewPropsHandler({ limit: limit });
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.limit) {
      limit = props.limit;
      count = 1;
      arcs = [];
      index = 0;
      sequence = [];
      numbers = [];
      biggest = 0;
    }
    if (props.shape) {
      shape = props.shape;
      count = 1;
      arcs = [];
      index = 0;
      sequence = [];
      numbers = [];
      biggest = 0;
    }
  };

  p.draw = function() {
    if (count < limit) {
      deviceConfig(p);

      step(p);
      p.scale(p.width / biggest);

      p.background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
      for (let a of arcs) {
        a.show(p);
      }
    } else if (count === limit) {
      step(p);
      p.scale(p.width / biggest);
    }
  };
}
