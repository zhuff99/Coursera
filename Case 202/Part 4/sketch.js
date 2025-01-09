/*

Officer: 5070395
CaseNum: 202-3-42757786-5070395

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce pink filled text with red outline in Melissa font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(549,531);
	textSize(30);
}

function draw()
{
	background(255);

	push();
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Diggity);
	// text("a", 467,189);
	pop();
	fill(255,165,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("Perhaps", 150,189);
	// text("x", 77,415);
	push();
	stroke(0,0,0);
	textFont(RonsFont);
	// text("My", 17,30);
	pop();
	textFont(RonsFont);
	// text("so", 13,156);
	push();
	stroke(0,0,0);
	textFont(Ballpointprint);
	// text("how", 388,90);
	// text("I", 20,125);
	pop();
	textFont(Diggity);
	// text("Is", 317,257);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("?", 72,295);
	// text("s", 361,221);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Melissa);
	// text("break", 8,221);
	// text("sure", 346,90);
	// text("this", 165,221);
	stroke(255,0,255);
	textFont(Diggity);
	// text("You", 411,125);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Melissa);
	// text("Bob,", 122,30);
	fill(255,192,203);
	textFont(Ballpointprint);
	// text("can", 57,125);
	fill(255,255,0);
	textFont(Diggity);
	// text("take", 104,125);
	textFont(Ballpointprint);
	// text("sort", 114,221);
	push();
	stroke(0,255,0);
	textFont(Melissa);
	// text("can", 258,156);
	// text("money", 470,221);
	pop();
	textFont(Melissa);
	// text("out.", 242,221);
	// text("?", 162,125);
	fill(255,192,203);
	stroke(0,255,0);
	// text("much", 441,90);
	fill(255,255,0);
	textFont(RonsFont);
	// text("?", 14,257);
	fill(0,255,255);
	stroke(0,0,255);
	textFont(Melissa);
	// text("Forever", 11,355);
	// text("continual", 11,189);
	// text("The", 178,125);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Diggity);
	// text("ignore", 398,156);
	// text("secrets,", 218,125);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("I", 231,156);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("we", 250,189);
	fill(0,255,255);
	textFont(Melissa);
	// text("delays.", 88,189);
	push();
	textFont(Ballpointprint);
	// text("If", 36,257);
	pop();
	textFont(Diggity);
	// text("silenc", 339,125);
	fill(255,255,0);
	stroke(255,0,255);
	textFont(Melissa);
	// text("no", 293,156);
	// text("these", 464,156);
	// text("ed", 94,156);
	fill(255,165,0);
	// text("you", 327,221);
	textFont(Diggity);
	// text("not", 302,90);
	// text("e.", 384,125);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("safe", 12,295);
	push();
	fill(255,255,0);
	textFont(Melissa);
	// text("away", 380,189);
	pop();
	textFont(Diggity);
	// text("Are", 7,90);
	fill(255,255,0);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("I", 121,257);
	stroke(0,0,0);
	textFont(Diggity);
	// text("of", 436,221);
	// text("are", 458,125);
	// text("etimes.", 154,156);
	fill(255,192,203);
	stroke(255,0,255);
	// text("can", 158,257);
	push();
	fill(0,255,255);
	stroke(0,0,255);
	textFont(RonsFont);
	// text("Daisy", 7,415);
	pop();
	textFont(Melissa);
	// text("so,", 88,257);
	// text("should", 297,189);
	// text("more", 487,90);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("all", 205,221);
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Diggity);
	// text("Are", 278,221);
	fill(0,255,255);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("hort", 374,221);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Melissa);
	text("cash", 271,257);
	push();
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Diggity);
	// text("som", 119,156);
	pop();
	textFont(Ballpointprint);
	// text("me", 162,90);
	// text("and", 61,221);
	push();
	fill(0,255,255);
	stroke(0,0,255);
	textFont(RonsFont);
	// text("send", 203,257);
	pop();
	textFont(Melissa);
	text("go", 353,189);
	text("guard", 50,156);
	fill(255,255,0);
	// text("ing", 132,90);
	fill(255,192,203);
	stroke(0,0,255);
	// text("our", 341,257);
	// text("darling", 62,30);
	textFont(Diggity);
	// text("?", 210,90);
	stroke(255,0,0);
	textFont(Melissa);
	text("avoid", 90,90);
	text("for", 433,189);
	text("the", 305,125);
	text("you", 56,90);
	fill(0,255,255);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("relationship", 373,257);
	// text("longer", 319,156);
	push();
	stroke(0,0,0);
	// text("I'm", 233,90);
	pop();
	stroke(255,0,0);
	textFont(Melissa);
	// text("yours,", 81,355);



}
