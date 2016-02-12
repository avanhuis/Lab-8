var Shape = function (shape) { //Shape is the class
	this.shape = shape;
}

Shape.prototype.getType = function (typeOfShape) { //getType method
	this.typeOfShape = typeOfShape;
	console.log("works?");
}

var triangle = function (a, b, c) {
	Shape.call(this);
	this.a = a;
	this.b = b;
	this.c = c;
};

triangle.prototype = Object.create(Shape.prototype);

triangle.prototype.getPerimeter = function () { //getPerimeter method
	console.log(this.a + this.b + this.c);
}

//Making new triangles below

var aleah = new triangle(1, 2, 3);
var amanda = new triangle(3, 4, 5);

aleah.getPerimeter();
amanda.getPerimeter();

aleah.getType();
amanda.getType();