function ThreeTypes(name) {  'use strict';
	
	this.name = name;
	
	function privateFunc(count)	{
		console.log("This is a private function", count);
	}
	
    // Public function
	this.normalFunc = function(count)	{
		privateFunc(count);
		console.log("This is a normal function", count);
	};
}

// Pascal Case: Use new when calling me: ThreeTypes!
// The this variable is bound to ThreeTypes.
var threeTypes = new ThreeTypes('Passed as parameter');
threeTypes.normalFunc(5); 
console.log(threeTypes.name);
