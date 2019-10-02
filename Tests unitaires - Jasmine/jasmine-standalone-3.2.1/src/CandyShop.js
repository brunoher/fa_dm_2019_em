function Candies() {};


Candies.prototype.remove = function(name, number) {
	if (this[name] && this[name].number - number >= 0) {
		this[name].number -= number;	
	} else {
		throw new Error("Not enough " + name + ' ! :-/');
	} 	
};

Candies.prototype.add = function(name, number) {
	if (this[name]) {
		this[name].number += number;	
	} else {
		this[name] = new Candy(name, number);	
	}
}



function Candy(name, number) {
	this.name = name;
	this.number = number;
}