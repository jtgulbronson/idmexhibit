/*
Plain Weaving Generator

- Drag : zoom & resize each vertical, horizontal thread thickness and density 
        
- click : change horizontal thread color / restart animation 

- move : changing vertical thread color 
*/

var hThickness = 10; // horizontal thread thickness 20 
var vThickness = 7;  // vertical thread thickness 20  
var btwSpace = 12; // density 40
var stitch = (btwSpace*2)-hThickness; 

var speed = 7; 

var hColor; 
var vColor_1; 
var vColor_2; 

var hWidth = 0; 
var hStep = 0; 

function setup() { 
  createCanvas(1024, 1024);
  background(0);
  // frameRate(30);

  hColor = color("#fff");

} 

function draw() { 
	background(0);
	noStroke(); 
	smooth(); 

	vColor_1 = color("#444");
	vColor_2 = color("#444");

	//default
	for(var i = btwSpace; i<height; i +=btwSpace*2){
		fill(vColor_1);
		rect(i,0,vThickness,height);
	}
	for(var i = btwSpace*2; i<height; i +=btwSpace*2){
		fill(vColor_2); 
		rect(i,0,vThickness,height);
	}

	//horizontal line
	if(hWidth <= width){

		for(var i = 0; i < 1; i++){
			fill(hColor);
			rect(0,i*btwSpace,hWidth,hThickness);
			// shadow
			fill(0,100);
			rect(0,i*btwSpace+(hThickness-hThickness/8),hWidth,hThickness/8);
		}
		
		hWidth += speed;

	}else{
		for(var i = 0; i < 1; i++){
			fill(hColor);
			rect(0,i*btwSpace,hWidth,hThickness);
			// shadow
			fill(0,100);
			rect(0,i*btwSpace+(hThickness-hThickness/8),hWidth,hThickness/8);
		}
	}


	// vertical line 
	// up 
	for(var j = 0; j < width; j +=btwSpace*2){
		for(var i = hThickness; i<height+vThickness*3; i +=btwSpace*2){
			fill(vColor_1); // yellow
			rect(j+btwSpace,i-btwSpace,vThickness,stitch);
			// // shadow
			// fill(0,60);
			// rect(j+btwSpace,i-btwSpace,vThickness/4,stitch);
		}
	}

	//down
	for(var j = 0; j<width; j +=btwSpace*2){
		for(var i =0; i<height; i += btwSpace*2){
			fill(vColor_2); // cyan
			rect(j,i+hThickness,vThickness,stitch);
			// //shadow
			// fill(0,60);
			// rect(j,i+hThickness,vThickness,stitch/10);
		
		}
	}

}

// function mouseDragged(){
// 	// println("vThickness : " + vThickness+" | "+"hThickness : "+ hThickness);

// 	hThickness = map(mouseY,0,height,6,40);  // vertical thread thickness 20  
// 	vThickness = map(mouseX,0,width,6,40);  // vertical thread thickness 20  

// 	btwSpace = map(mouseY,0,height,2,99);
// 	stitch = (btwSpace*2)-hThickness;
// }


function mousePressed(){
	////reset
	// hThickness = 10; // horizontal thread thickness 20 
	// vThickness = 10;  // vertical thread thickness 20  
	// btwSpace = 20; // density 40 
	// stitch = (btwSpace*2)-hThickness; 

	hColor = color("#fff");
	hWidth = 0;
}