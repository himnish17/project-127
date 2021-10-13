harry_potter=harry_potter_theme_song.mp3;
peter_pan=peter_pan_song.mp3;
song="";
function setup() {
    canvas=createCanvas(600 , 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function preload() {
    song=loadSound("harry_potter");
    song=loadSound("peter_pan");
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}
