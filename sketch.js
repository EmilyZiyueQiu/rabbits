var rabbitpic;
var rabbitgroup;

function preload() {
  rabbitpic = loadAnimation("assets/rabbit.png");
}


function setup() {
  cnv=createCanvas(1200, 600);
  centerCanvas();


  rabbit=new Group();
  for (var i = 0; i < 10; i++) {
    var r = createSprite(random(100, width-100),random(100, height-100),10, 10);
    r.addAnimation("default",rabbitpic);
    rabbit.add(r);
  }  

  //player
  rabbitplayer = createSprite(
    0, height/2, 40, 40);
  rabbitplayer.shapeColor = color(100,100,200);

  //home
  rabbitFinal = createSprite(
    1100, 40, 60, 60);
  rabbitFinal.shapeColor = color("pink");

}
function draw() {
  background(50);

  //let rabbits move
  for (var i = 0; i < rabbit.length; i++) {
    rabbit[i].position.y += rabbit[i].height * 0.015;
    if (rabbit[i].position.y > height) {
      rabbit[i].position.y = 0;
    }
  }

  rabbitplayer.overlap(rabbit,rabbitGameOver);
  rabbitplayer.overlap(rabbitFinal,rabbitGameWin);

  drawSprites();
  

}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    rabbitplayer.setSpeed(3.0, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    rabbitplayer.setSpeed(3.0, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    rabbitplayer.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    rabbitplayer.setSpeed(3.0, 270);
  }
  else if (key == ' ') {
    rabbitplayer.setSpeed(0, 0);
  }
  return false;
}

//centerCanvas
function centerCanvas(){
  let x = (windowWidth - width)/2;
  let y = (windowHeight - height)/2;
  cnv.position(x,y);
}

//game over
function rabbitGameOver(){
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  fill("red");
  text("GAME OVER",width/2, height/2);
  noLoop();
}

//win
function rabbitGameWin(){
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  fill("pink");
  text("You win",width/2, height/2);
  noLoop();
}