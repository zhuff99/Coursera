function setup()
{
	createCanvas(1000, 1000);
}

function draw()
{
	noStroke();


	fill(255, 255, 0);
	rect(100, 50, 50, 100)
	fill(0,223,2)
	triangle(100,100,150,50,200,100);
	triangle(-150,-50,-200,-100,-100,-100);
}