let y;

function setup () {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    strokeWeight(3)
    y = 0;
}

function draw () {
    background(0);
    line(0, y, width, y);
    y = y - 2
    if (y < 0) {
        y = height;
    }
}