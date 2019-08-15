class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var foo;

var bar = null;

console.log(typeof foo);
console.log(typeof bar);
console.log(bar);
var qux = {};
var goober = ['one', 'two'];
console.log('qux = ', qux);
console.log('goober = ', goober);
console.log(goober[0]);

function quxer()
{ 
	return {
		a: 1,
		b: 2
	}
}
