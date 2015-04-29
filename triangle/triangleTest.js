

QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(6,6,6),true,"6,6,6 is equilateral") ;
	assert.equal(triangle.isEquilateral(0,0,0),false,"0,0,0 is not") ;
	assert.equal(triangle.isEquilateral(-1,-1,-1),false,"-1,-1,-1 is not") ;
	assert.equal(triangle.isEquilateral(0,1,-1),false,"0,1,-1 is not") ;
});
QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(6,6,3),true,"6,6,3 is isosceles") ;
	assert.equal(triangle.isIsosceles(2,4,4),true,"2,4,4 is isosceles") ;
	assert.equal(triangle.isIsosceles(5,2,5),true,"5,2,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(3,2,5),false,"3,2,5 is not") ;
	assert.equal(triangle.isIsosceles(0,0,1),false,"0,0,1 is not") ;
	assert.equal(triangle.isIsosceles(-2,-2,4),false,"-2,-2,4 is not") ;
	assert.equal(triangle.isIsosceles(1,1,3),false,"1,1,3 is not") ;
	assert.equal(triangle.isIsosceles(4,4,8),false,"4,4,8 is not") ;
});
QUnit.test("scalene triangle has three different sides", function( assert ) {
	assert.equal(triangle.isScalene(3,4,5),true,"3,4,5 is scalene") ;
	assert.equal(triangle.isScalene(3,5,4),true,"3,5,4 is scalene") ;
	assert.equal(triangle.isScalene(1,2,4),false,"1,2,4 is not") ;
	assert.equal(triangle.isScalene(1,4,5),false,"1,4,5 is not") ;
});