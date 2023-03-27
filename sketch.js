let a;
let star = [];
let z = 0;

function setup() {
  canvas = createCanvas(1000, 500);
  canvas.position(windowWidth/2-1000/2,windowHeight/2-500/2);
  background(9, 19, 154);
  a = new Array(width);
  for (let j = 0; j < width; j++) {
    a[j] = new drew(
      color(194, 198, 244),
      40 * j,
      70 * j,
      120 * j,
      50 * j,

      int(30 + j * 10),
      int(50 + j * 10 * 0.5),
      20 + j * 20,
      int(random(65, 75)),

      random(0.4, 0.6)
    );
  }

  star = new Array(50);
  for (let i = 0; i < 50; i++) {
    star[i] = new stars(random(width), random(height / 3));
  }
}

function draw() {
  for (let i = 0; i < 50; i++) {
    star[i].shine();
  }
  
  //구름
  stroke(255);
  strokeWeight(1);
  fill(194, 198, 244);
  rect(90, 70, 60, 20, 50, 50, 50, 50);
  rect(70, 80, 60, 20, 30, 30, 30, 30);
  rect(90+800, 70, 60, 20, 30, 30, 30, 30);
  rect(70+800, 80, 60, 20, 30, 30, 30, 30);
 
  //달
  fill(255, 253, 244);
  circle(width - 320, 70, 50);
  //해
  fill(255, 0, 0);
  circle(320, 70, 50);
  for (let j = 0; j < width; j++) {
    a[j].draw();
  }

  //흰색 테두리
  noFill();
  strokeWeight(60);
  stroke(245);
  rect(0, 0, width / 4, height - 80);
  rect(width / 4, 0, width / 4, height - 80);
  rect((width / 4) * 2, 0, width / 4, height - 80);
  rect((width / 4) * 3, 0, width / 4, height - 80);

  //금색 테두리
  noFill();
  strokeWeight(30);
  stroke(226, 204, 126);
  rect(0, 0, width / 4, height - 80);
  rect(width / 4, 0, width / 4, height - 80);
  rect((width / 4) * 2, 0, width / 4, height - 80);
  rect((width / 4) * 3, 0, width / 4, height - 80);

  //연두 테두리
  noFill();
  strokeWeight(20);
  stroke(92, 199, 138);
  rect(0, 0, width / 4, height);
  rect(width / 4, 0, width / 4, height);
  rect((width / 4) * 2, 0, width / 4, height);
  rect((width / 4) * 3, 0, width / 4, height);
  //밑에연두네모
  fill(32, 146, 97);
  rect(-10, 420, width + 20, 80);

  // 자주색 테두리
  noFill();
  strokeWeight(10);
  stroke(110, 12, 51);
  rect(0, 0, width / 4, height);
  rect(width / 4, 0, width / 4, height);
  rect((width / 4) * 2, 0, width / 4, height);
  rect((width / 4) * 3, 0, width / 4, height);

  //밑에자주색네모
  fill(110, 12, 51);
  rect(0, 480, width, 80);
}

class drew {
  constructor(_col, _num1, _num2, _num3, _num4, _d1, _d2, _d3, _d4, _zs) {
    this.zs = 0;
    this.col = _col;
    this.num1 = _num1;
    this.num2 = _num2;
    this.num3 = _num3;
    this.num4 = _num4;
    this.d1 = _d1;
    this.d2 = _d2;
    this.d3 = _d3;
    this.d4 = _d4;
    this.zs = _zs;
  }

  draw() {
    push();
    translate(999, 399);
    rotate(91.1);
    fill(10, 112, 65, 40);
    console.log(z);
    stroke(this.col, z / 5);
    strokeWeight(1.5);
    
    //4번째
    if (
      mouseX > this.num1 - this.d1 / 2 &&
      mouseX < this.num1 + this.d1 / 2
    ) {
      if (mouseX > 0 && mouseX < width / 4) {
        // bezier( this.num1,  0, 300, z, 0, z, this.num1+800 ,  0);
        arc(this.num1, 0, this.d1, z, radians(0), radians(180));
        
        z = mouseY * this.zs;
      }
    }
    //3
    if (
      mouseX > this.num2 - this.d2 / 2 &&
      mouseX < this.num2 + this.d2 / 2
    ) {
      if (mouseX > width / 4 && mouseX < (width / 4) * 2) {
        arc(this.num2, 0, this.d2, z, radians(0), radians(180));
        z = mouseY * 1;
      }
    }
    //2
    if (
      mouseX > this.num3 - this.d3 / 2 &&
      mouseX < this.num3 + this.d3 / 2
    ) {
      if (mouseX > (width / 4) * 2 && mouseX < (width / 4) * 3) {
        arc(this.num3, 0, this.d3 + 30, z, radians(0), radians(180));
        z = mouseY * 0.3;
      }
    }
    //1
    if (
      mouseX > this.num4 - this.d4 / 2 &&
      mouseX < this.num4 + this.d4 / 2
    ) {
      if (mouseX > (width / 4) * 3 && mouseX < width) {
         arc(this.num4, 0, this.d4, z, radians(0), radians(180));
        

        z = mouseY * 0.5;
      }
    }
    pop();
  }
}

class stars {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  shine() {
    fill("yellow");
    noStroke();
    circle(this.x, this.y, random(1, 2));
  }
}
