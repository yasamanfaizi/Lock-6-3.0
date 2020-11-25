var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["80f17555-a0a6-4ce2-81e5-42c6d55a79c3","63208125-4f35-4000-9bb3-b36211be033c","80d18550-d2cb-4bfe-b43a-934f41ea55b9","42e0d045-06bb-4e41-be6b-92b55909e3ef","c2ff6291-d047-446c-9ba2-eab06dc6d865","0f662de0-d3e3-4050-9a31-359dd998358c","2f9da8e7-2655-47d6-ac17-cd7d0f10802b"],"propsByKey":{"80f17555-a0a6-4ce2-81e5-42c6d55a79c3":{"name":"H.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/80f17555-a0a6-4ce2-81e5-42c6d55a79c3.png","frameSize":{"x":1200,"y":2065},"frameCount":1,"looping":true,"frameDelay":4,"version":"z7W6mwKL.v_OH0ykvAQdtTKoci5gYSfG","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":2065},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/80f17555-a0a6-4ce2-81e5-42c6d55a79c3.png"},"63208125-4f35-4000-9bb3-b36211be033c":{"name":"A.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/63208125-4f35-4000-9bb3-b36211be033c.png","frameSize":{"x":1200,"y":1712},"frameCount":1,"looping":true,"frameDelay":4,"version":"T.Cb4dhhcjF67zweJ5Dogppspe9Vp8mJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1712},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/63208125-4f35-4000-9bb3-b36211be033c.png"},"80d18550-d2cb-4bfe-b43a-934f41ea55b9":{"name":"P.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/80d18550-d2cb-4bfe-b43a-934f41ea55b9.png","frameSize":{"x":1200,"y":2421},"frameCount":1,"looping":true,"frameDelay":4,"version":"oyfiRFk1n_.3NE8v8b9IfgUsWeEpwp.A","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":2421},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/80d18550-d2cb-4bfe-b43a-934f41ea55b9.png"},"42e0d045-06bb-4e41-be6b-92b55909e3ef":{"name":"T.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/42e0d045-06bb-4e41-be6b-92b55909e3ef.png","frameSize":{"x":1200,"y":1847},"frameCount":1,"looping":true,"frameDelay":4,"version":"hNkPtLAwG.Gat8KV4uJXQwJ.sLQ83ICM","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1847},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/42e0d045-06bb-4e41-be6b-92b55909e3ef.png"},"c2ff6291-d047-446c-9ba2-eab06dc6d865":{"name":"E.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/c2ff6291-d047-446c-9ba2-eab06dc6d865.png","frameSize":{"x":1200,"y":2421},"frameCount":1,"looping":true,"frameDelay":4,"version":"mFhbRiZzOrFBMbTKbjcRKB.ZQFHn1Fhv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":2421},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/c2ff6291-d047-446c-9ba2-eab06dc6d865.png"},"0f662de0-d3e3-4050-9a31-359dd998358c":{"name":"C.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/0f662de0-d3e3-4050-9a31-359dd998358c.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"4Waii79MtvMPWI1iKbCFpHCNP3SNSUqA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/0f662de0-d3e3-4050-9a31-359dd998358c.png"},"2f9da8e7-2655-47d6-ac17-cd7d0f10802b":{"name":"R.png","sourceUrl":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/2f9da8e7-2655-47d6-ac17-cd7d0f10802b.png","frameSize":{"x":1200,"y":1359},"frameCount":1,"looping":true,"frameDelay":4,"version":"MyfGYzgDIkDb_7XQR7Br4O8JDtBRiwPE","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1359},"rootRelativePath":"assets/v3/animations/evnFMFvBLQfY36jeUxEGcBad0FZ0TL7FEDNndUMbwvM/2f9da8e7-2655-47d6-ac17-cd7d0f10802b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
var playerPaddle = createSprite(380,200,10,70);
var computerPaddle = createSprite(10,200,10,70);
var C = createSprite(125,15,5,5);
C.setAnimation("C.png");
C.scale = 0.015;
var H = createSprite(145,15,5,5);
H.setAnimation("H.png");
H.scale = 0.01;
var A = createSprite(165,15,5,5);
A.setAnimation("A.png");
A.scale = 0.01;
var P = createSprite(185,15,5,5);
P.setAnimation("P.png");
P.scale = 0.01;
var T = createSprite(205,15,5,5);
T.setAnimation("T.png");
T.scale = 0.01;
var E = createSprite(225,15,5,5);
E.setAnimation("E.png");
E.scale = 0.01;
var R = createSprite(245,15,5,5);
R.setAnimation("R.png");
R.scale = 0.01;
//variable to store different state of game
var gameState = "serve";
var count = 0;

var computerscore = 0;
var playerscore = 0;
textSize(15);

function draw() {
  //clear the screen
  background("white");
  
  text(computerscore,170,10);
  text(playerscore,230,10);
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",130,180);
  }
  
  if(ball.isTouching(playerPaddle)){
    count = count + 1;
  }
  if(count >= 3){
  C.visible = true;
  } else {
    C.visible = false;
  }
  if(count >= 6){
  H.visible = true;
  } else {
    H.visible = false;
  }
  if(count >= 12){
  A.visible = true;
  } else {
    A.visible = false;
  }
  if(count >= 15){
  P.visible = true;
  } else {
    P.visible = false;
  }
  if(count >= 18){
  T.visible = true;
  } else {
    T.visible = false;
  }
  if(count >= 21){
  E.visible = true;
  } else {
    E.visible = false;
  }
  if(count >= 24){
  R.visible = true;
  } else {
    R.visible = false;
  }
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x>400) {
      computerscore = computerscore+1;
    }
    if(ball.x<0) {
     playerscore = playerscore+1; 
    }
    reset();
    gameState = "serve";
    count = 0;
  }
  
 if (computerscore === 5||playerscore === 5){
   gameState="over";
   text ("Game Over",170,160);
   text ("press R to restart",145,180);
 } 
  if (keyDown("r")&& gameState === "over"){
    computerscore = 0;
    playerscore = 0;
    gameState = "serve";
  }
  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
