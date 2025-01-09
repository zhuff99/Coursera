/*
The case of the Python Syndicate
Stage 4

Officer: 5070395
CaseNum: 301-3-41965825-5070395

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var rockyKrayImg;
var cecilKarpinskiImg;
var annaKarpinskiImg;
var bonesKarpinskiImg;
var robbieKrayImg;
var pawelKarpinskiImg;

var robbieKrayObj;
var rockyKrayObj;
var cecilKarpinskiObj;
var annaKarpinskiObj;
var bonesKarpinskiObj;
var pawelKarpinskiObj;

//declare your new objects below


var rockyKrayCoordinateX = 115;
var rockyKrayCoordinateY = 40;
var cecilKarpinskiCoordinateX = 408;
var cecilKarpinskiCoordinateY = 40;
var annaKarpinskiCoordinateX = 701;
var annaKarpinskiCoordinateY = 40;
var bonesKarpinskiCoordinateX = 115;
var bonesKarpinskiCoordinateY = 309;
var pawelKarpinskiCoordinateX = 701;
var pawelKarpinskiCoordinateY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImg = loadImage("krayBrothers1.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObj = {
		x: 408,
		y: 309,
		image: robbieKrayImg
	};



	//define your new objects below
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObj = {
		x: rockyKrayCoordinateX,
		y: rockyKrayCoordinateY,
		image: rockyKrayImg
	};

	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObj = {
		x: cecilKarpinskiCoordinateX,
		y: cecilKarpinskiCoordinateY,
		image: cecilKarpinskiImg
	};

	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObj = {
		x: annaKarpinskiCoordinateX,
		y: annaKarpinskiCoordinateY,
		image: annaKarpinskiImg
	};

	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: bonesKarpinskiCoordinateX,
		y: bonesKarpinskiCoordinateY,
		image: bonesKarpinskiImg
	};

	createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObj = {
		x: pawelKarpinskiCoordinateX,
		y: pawelKarpinskiCoordinateY,
		image: pawelKarpinskiImg
	};




}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rockyKrayImg, rockyKrayObj.x, rockyKrayObj.y);

	image(cecilKarpinskiImg, cecilKarpinskiObj.x, cecilKarpinskiObj.y);

	image(annaKarpinskiImg, annaKarpinskiObj.x, annaKarpinskiObj.y);

	image(bonesKarpinskiImg, bonesKarpinskiObj.x, bonesKarpinskiObj.y);

	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);

	image(pawelKarpinskiImg, pawelKarpinskiObj.x, pawelKarpinskiObj.y);


}