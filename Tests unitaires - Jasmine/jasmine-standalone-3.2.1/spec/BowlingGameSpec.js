describe("Bowling game", function() {
    var game;

    beforeEach(function(){
        game = new BowlingGame();
    });

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    function rollOnlySpares () {
    	var pins = 6;
    	for (var i = 0; i < 20; i++) {
    		game.roll(pins);
    		pins = 6 ? 4 : 6;
    	}
    }


    it("should properly calculate a gutter game", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });
    


    it("should properly calculate a strike", function () {
        rollMany(20, 10);
        expect(game.score()).toEqual(390);
    });
    
    it("should properly calculate a spare", function () {
        rollOnlySpares();
        expect(game.score()).toEqual(314);
    });
        
});