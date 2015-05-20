QUnit.test("It should handle key press", function( assert ) {
	$('#3').click();
	$('#4').click();
	$('#5').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 345 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should handle key press", function( assert ) {
	$('#7').click();
	$('#6').click();
	$('#8').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 768 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 6 , "Passed!" );
    $('#AC').click();
});

QUnit.test("It should plus two numbers", function( assert ) {
	$('#6').click();
	$('#plus').click();
	$('#4').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 10 , "Passed!" );
     $('#AC').click();
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#3').click();
	$('#dot').click();
	$('#6').click();
	$('#minus').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 1.6 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#5').click();
	$('#minus').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 2 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#dot').click();
	$('#5').click();
	$('#multiply').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 5, "Passed!" );
    $('#AC').click();
});
QUnit.test("It should divide two numbers", function( assert ) {
	$('#2').click();
	$('#dot').click();
	$('#4').click();
	$('#4').click();
	$('#divide').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 1.22, "Passed!" );
});