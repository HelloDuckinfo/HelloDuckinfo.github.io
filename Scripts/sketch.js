let font;
let splode;
let mouseSplode;

function preload() {
    font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.js');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize(250);
    textAlign(CENTER, CENTER);
    splode = new Splode(width / 2, height / 2);
}

function draw() {
    background('#f2B441');
    splode.display();
}

function mousePressed() {
    splode = new Splode(mouseX, mouseY);
}

class Splode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.scale = 1;
        this.angle = random(TWO_PI);
        this.splodes = [];
        this.createSplodes();
    }

    createSplodes() {
        for (let i = 0; i < 10; i++) {
            this.splodes.push({
                x: this.x + random(-50, 50),
                y: this.y + random(-50, 50),
                size: random(30, 60),
                speed: random(2, 5),
                angle: random(TWO_PI)
            });
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        text("POW!", 0, 0);
        pop();

        for (let i = 0; i < this.splodes.length; i++) {
            let s = this.splodes[i];
            push();
            translate(s.x, s.y);
            rotate(s.angle);
            noStroke();
            fill(0);
            ellipse(0, 0, s.size);
            s.x += cos(s.angle) * s.speed;
            s.y += sin(s.angle) * s.speed;
            pop();
        }
    }
}