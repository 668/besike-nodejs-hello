// var expect = require("chai").expect

greet = require("greet");

describe('greet', function(){
	it("should greet a person by name", function(){
		expect(greet('Hanfei')).to.eql('hello Hanfei');
	});

	it("should greet a person flirtatiously if drunk", function(){
		expect(greet('Hanfei', true)).to.eql('hello Hanfei, you look sexy today');
	});
});

// describe('greet', function(){
// 	it("is a dummy success case", function(){
// 		expect(2).to.eql(1);

// 	});
// });