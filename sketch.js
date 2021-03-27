var fixedBox;
var controllableBox;

function setup() {
  createCanvas(800,400);
  //fixed one
  fixedBox = createSprite(400, 200, 50, 50);
  controllableBox = createSprite(100, 200, 50, 50);
  //colors
  fixedBox.shapeColor = "green";
  controllableBox.shapeColor = "green";
}

function draw() {
  background(25,255,255);  
  controllableBox.x = World.mouseX;
  controllableBox.y = World.mouseY;

  if (fixedBox.x - controllableBox.x < controllableBox.width/2 + fixedBox.width/2
    && controllableBox.x - fixedBox.x < controllableBox.width/2 + fixedBox.width/2
    && fixedBox.y - controllableBox.y < controllableBox.height/2 + fixedBox.height/2
    && controllableBox.y - fixedBox.y < controllableBox.height/2 + fixedBox.height/2){
      fixedBox.shapeColor = "red";
      controllableBox.shapeColor = "red";
   }else {  
    fixedBox.shapeColor = "green";
    controllableBox.shapeColor = "green";
   }

  drawSprites();
}