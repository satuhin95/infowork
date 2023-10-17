// Create an array to store our particles
var particles = [];

// The amount of particles to render
var particleCount = 17;
var currentParticleCount = 0;
// The maximum velocity in each direction
var maxVelocity = 2;
var minVelocity = .5;
var growth = .5;

// The target frames per second (how often do we want to update / redraw the scene)
var targetFPS = 33;

// Set the dimensions of the canvas as variables so they can be used.
var canvasWidth;
var canvasHeight;

//setInterval variable
var intVar;

// Create an image object (only need one instance)
var imageObj = new Image();
var cig = new Image();
// Once the image has been downloaded then set the image on all of the particles

// Once the callback is arranged then set the source of the image
imageObj.src = "img/spray.png";
cig.src = "https://i.imgur.com/t7NmLES.png";
// A function to create a particle object.
function Particle(context) {

  // Set the initial x and y positions
  this.x = 0;
  this.y = 0;

  // Set the initial velocity
  this.xVelocity = 0;
  this.yVelocity = 0;
  this.currentopacity = 1;
  // Set the radius
  this.radius = 15;
  this.rotation = 0;
  // Store the context which will be used to draw the particle
  this.context = context;

  // The function to draw the particle on the canvas.
  this.draw = function() {

    // If an image is set draw it
    if (this.image) {
      var Offset = this.radius / -2;
      this.context.save();
      this.context.translate(this.x, this.y);
      this.context.globalAlpha = this.currentopacity;
      this.context.rotate(this.rotation);
      this.context.drawImage(this.image, Offset, Offset, this.radius, this.radius);
      this.context.restore();

      // If the image is being rendered do not draw the circle so break out of the draw function                
      return;
    }

  };

  // Update the particle.
  this.update = function() {
    // Update the position of the particle with the addition of the velocity.
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.rotation += Math.PI / 18;
    this.currentopacity -= .009;
    this.radius += growth;
    // Check if has crossed the right edge
    if (this.currentopacity <= 0) {
      this.currentopacity = 1;
      this.x = canvasWidth / 2 - 180;
      //this.x = generateRandom(0, canvasWidth);
      this.y = canvasHeight / 2 + 20;
      this.rotation = generateRandom(0, Math.PI * 2);
      this.radius = 15;
    }
    if (this.x >= canvasWidth) {
      this.xVelocity = -this.xVelocity;
      this.x = canvasWidth;
    }
    // Check if has crossed the left edge
    else if (this.x <= 0) {
      this.xVelocity = -this.xVelocity;
      this.x = 0;
    }

  };

  // A function to set the position of the particle.
  this.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
  };

  // Function to set the velocity.
  this.setVelocity = function(x, y) {
    this.xVelocity = x;
    this.yVelocity = y;
  };

  this.setImage = function(image) {
    this.image = image;
  }
  this.setRotation = function(x) {
    this.rotation = x;
  }
}

// A function to generate a random number between 2 values
function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  // The canvas context if it is defined.
var context;

function addParticle(context) {
  var particle = new Particle(context);
  // Set the position to be inside the canvas bounds
  particle.setPosition(canvasWidth / 2 - 180, canvasHeight / 2 + 20);
  particle.setRotation(generateRandom(0, Math.PI * 2));
  // Set the initial velocity to be either random and either negative or positive
  particle.setVelocity(generateRandom(-.1, .1), -1.5);
  particle.setImage(imageObj);
  particles.push(particle);
  currentParticleCount++;
  if (currentParticleCount < particleCount) {
    setTimeout(function() {
      addParticle(context);
    }, 200);
  }
  console.log("over");
}

function placeholder(context) {
    addParticle(context)
  }
  // Initialise the scene and set the context if possible
function init() {
  var canvas = document.getElementById('myCanvas');
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
  canvasHeight = canvas.height;
  canvasWidth = canvas.width;
  console.log(canvasHeight);
  if (canvas.getContext) {

    // Set the context variable so it can be re-used
    context = canvas.getContext('2d');

    // Create the particles and set their initial positions and velocities
    addParticle(context);
    //window.clearInterval(intervalVariable)
  } else {
    alert("Please use a modern browser,that means that your browser is old");

  }
}

// The function to draw the scene
function draw() {
  // Clear the drawing surface and fill it with a black background
  context.fillStyle = "rgba(0, 0, 0, 0.5)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(cig, canvasWidth / 2 - 200, canvasHeight / 2 - 133, 400, 267);

  // Go through all of the particles and draw them.
  particles.forEach(function(particle) {
    particle.draw();
  });
}

// Update the scene
function update() {
  particles.forEach(function(particle) {
    particle.update();
  });
}

// Initialize the scene
init();

// If the context is set then we can draw the scene (if not then the browser does not support canvas)
if (context) {
  setInterval(function() {
    // Update the scene befoe drawing
    update();

    // Draw the scene
    draw();
  }, 1000 / targetFPS);
}