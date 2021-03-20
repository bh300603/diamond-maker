var x;
var y;
var outsideRadius = 60;
var insideRadius = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  gui = new Gui();
  let gui_setup = new dat.GUI();
  noFill();
  gui_setup.add(gui,"points",0,500);
  gui_setup.add(gui,"stroke_weight",0,1);
  //gui_setup.add(gui,"radius1",50,300);
  //gui_setup.add(gui,"radius2",50,300);
  //gui_setup.add(gui,"rotate", 0,10);
    gui_setup.add(gui, 'show_description').onChange(description);
  
  gui_setup.add(gui,"red",0,255);
  gui_setup.add(gui,"green",0,127,5);
  gui_setup.add(gui,"blue",0,255);
  gui_setup.add(gui,"opacity",50,100);
  
  gui_setup.addColor(gui,"stroke_color");
  gui_setup.addColor(gui,'canvas_color');
  
}
//codepen for examples
//if you find code outside of p5js, list url to give credit

function draw() {
  //background(gui.color);
  background(gui.canvas_color);
  
  for (let x = windowWidth / 2 - windowWidth / 4; x <= windowWidth / 2 + windowWidth / 4; x += windowWidth / 4) 
      for (let y = windowHeight / 2 - windowHeight / 4; y <= windowHeight / 2 + windowHeight / 4; y += windowHeight / 4){ diamond(x, y, random(50), random(3, 2));}
      
  strokeWeight(gui.stroke_weight);
  stroke(gui.stroke_color);
  fill(gui.red,gui.green,gui.blue,gui.opacity);
  //translate(width/2,height/2);
  //rotate(PI / gui.rotate);
  //diamond(0,0, gui.radius1, gui.radius2, gui.points);
}

function Gui(){
  this.points = 10;
  this.stroke_weight = 1;
  //this.radius1 = 150;
  //this.radius2 = 170;
  this.stroke_color = '#F1D04A';
  this.canvas_color = '#C93127';
  //this.rotate = 5;
  this.show_description = true;

  
  this.red = 0;
  this.green = 0;
  this.blue = 0;
  this.opacity = 100;
}

function description(){
  if(gui.show_description){
    d.style('display','block');
  } else {
    d.style('display','none');
  }
}
function diamond(x, y, radius1, radius2, npoints) {
  let numPoints = int(map(gui.points, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0 / numPoints;

  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();
}