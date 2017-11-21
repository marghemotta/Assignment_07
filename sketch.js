var x1 = -15;
var x3 = 0;
var y2 = 5;
var y4 = 0;
var shelf2;
var mic;


function preload() {
    bkg = loadImage("bkg.png");
    shelf = loadImage("shelf.png");
    shelf2 = loadImage("shelf2.png");
    corpo = loadImage("corpo.png");
    prs1 = loadImage("prs1.png");
    prs2 = loadImage("prs2.png");
    prs3 = loadImage("prs3.png");
    prs4 = loadImage("prs4.png");
}

function setup() {
    createCanvas(500, 500);
    textFont('Trebuchet MS', 18);

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(bkg);
    image(prs4, 0, y4, 500, 500);
    image(shelf2, 0, 0, 500, 500);
    image(prs3, x3, 0, 500, 500);
    image(prs1, x1, 0, 500, 500);
    image(shelf, 0, 0, 500, 500);
    image(prs2, 0, y2, 500, 500);
    image(corpo, 0, 0, 500, 500);


    var vol = mic.getLevel();

    if (vol > 0.05 && x1 < 25) {
        x1 = x1 + 1;
        x3 = x3 - 1;
        y2 = y2 - 0.6;
        y4 = y4 - 1;

    } else if (vol < 0.05 && x1 > -10) {
        x1 = x1 - 1
        x3 = x3 + 1;
        y2 = y2 + 0.6;
        y4 = y4 + 1;
    }

    if (frameCount < 300) {
        fill(255);
        text('Please, keep quiet in the library', 130, 480)
    }

}
