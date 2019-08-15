function bootcamp(count) {
	for (var i = 0; i < count; i++) {
		console.log('Bootcamp');
	}
}

var bootcamp2 = function(count) {
	for (var i = 0; i < count; i++) {
		console.log('Bootcamp2');
	}
}

var myObject = {
	firstName: "Susan",
	lastName: "Smith",
	fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
	},
	callBootcamp: function() {
		bootcamp(2);
	}
};

bootcamp(5);
bootcamp2(5);
console.log(myObject.fullName());
myObject.callBootcamp();
