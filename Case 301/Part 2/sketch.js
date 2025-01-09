/*
The case of the Python Syndicate
Stage 2


Officer: 5070395
CaseNum: 301-1-61919682-5070395

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Lina lovelace

- The variables for Lina lovelace have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Lina lovelace for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var anna_karpinski_image;
var robbie_kray_image;
var lina_lovelace_image;
var bones_karpinski_image;
var cecil_karpinski_image;
var rocky_kray_image;


var lina_lovelace_x_coord = 701;
var lina_lovelace_y_coord = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	lina_lovelace_image = loadImage("lina.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	rocky_kray_image = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_image, lina_lovelace_x_coord, lina_lovelace_y_coord);

	image(anna_karpinski_image, lina_lovelace_x_coord - 586, lina_lovelace_y_coord);

	image(robbie_kray_image, lina_lovelace_x_coord -293, lina_lovelace_y_coord);

	image(bones_karpinski_image, lina_lovelace_x_coord - 586, lina_lovelace_y_coord + 269);

	image(cecil_karpinski_image, lina_lovelace_x_coord - 293, lina_lovelace_y_coord + 269)
	
	image(rocky_kray_image, lina_lovelace_x_coord, lina_lovelace_y_coord + 269);

}