
var wheelObj;

function setup()
{
	//create your canvas here
	createCanvas(1000, 1000);
	background(200);

	wheelObj = {
		x: 500,
		y: 500,
		width: 20,
		height: 20
	}

}



function draw()
{

	//do your drawing here
	for(let i = 0; i < 100; i++){

	let color1 = random(0, 255);
    let color2 = random(0, 255);
    let color3 = random(0, 255);
    let x = random(0, width); // Use 'width' of canvas instead of hardcoded 500
    let y = random(0, height); // Use 'height' of canvas instead of hardcoded 500
    let ellipseHeight = random(0, 100);
	let ellipseWidth = random(0, 100);

	fill(color1, color2, color3);

	ellipse(x, y, wheelObj.width, wheelObj.height);


	}

}