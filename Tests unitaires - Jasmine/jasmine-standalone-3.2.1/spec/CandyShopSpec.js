describe("Candy shop", function() {

	var candies;
	
	beforeEach(function(){
		candies = new Candies();
       	candies.add('Dragibus', 510);
		candies.add('Carambar', 600);
    });


	it("should properly add candies quantity when added according to candy type", function() {

        candies.remove('Dragibus', 20);
 
        expect(candies.Dragibus.number).toEqual(490);
    });

    it("should properly remove candies quantity when removed according to candy type", function() {
              
        candies.add('Carambar', 4);

        expect(candies.Carambar.number).toEqual(604);
    });

    it("should only modify quantity of candies with specific type added or removed", function() {
              
        candies.add('Marshmallows', 210);

        expect(candies.Carambar.number).toEqual(600);
    });

});