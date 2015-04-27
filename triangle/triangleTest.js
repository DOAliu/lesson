QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(4,4,4),true,"4,4,4 is equilateral") ;
	assert.equal(triangle.isEquilateral(0,0,0),false,"0,0,0 is not") ;
	assert.equal(triangle.isEquilateral(1,-1,-1),false,"1,-1,-1 is not") ;
});
QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(6,6,2),true,"6,6,2 is isosceles") ;
	assert.equal(triangle.isIsosceles(2,4,5),true,"2,4,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(5,3,5),true,"5,3,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(3,1,5),false,"3,1,5 is not") ;
	assert.equal(triangle.isIsosceles(0,0,1),false,"0,0,1 is not") ;
	assert.equal(triangle.isIsosceles(-2,-2,5),false,"-2,-2,5 is not") ;
});
QUnit.test("scalene triangle has three different sides", function( assert ) {
	assert.equal(triangle.isScalene(3,5,4),true,"3,5,4 is scalene") ;
	assert.equal(triangle.isScalene(3,6,4),true,"3,6,4 is scalene") ;
	assert.equal(triangle.isScalene(1,2,7),false,"1,2,7 is not") ;
});
