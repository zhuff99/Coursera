/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5070395
CaseNum: 201-3-84851623-5070395

As you enter the ALGOL warehouse you are struck by the most horrendous stench - 
it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set 
about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below

    beginShape ();
    vertex (470, 538);
    vertex (373, 245);
    vertex (227, 311);
    vertex (203, 262);
    vertex (322, 211);
    vertex (346, 139);
    vertex (463, 140);
    vertex (493, 186);
    vertex (516, 188);
    vertex (515, 126);



    vertex (517, 124);
    vertex (548, 129);
    vertex (542, 222);
    vertex (492, 227);
    vertex (565, 400);
    vertex (548, 410);
    vertex (576, 494);
    vertex (470, 537);
    endShape ();

}
