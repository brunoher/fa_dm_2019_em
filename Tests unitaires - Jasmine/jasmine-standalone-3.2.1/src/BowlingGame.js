var BowlingGame = function() {
    this.rolls = [];
    this.rollsType = [];
    this.currentRoll = 0;   
};

BowlingGame.prototype.isStrike = function(pins) {
	if (pins === 10 && this.currentRole % 2 !== 1) {
		this.rolls[this.currentRoll++] = pins;
		this.rolls[this.currentRoll++] = null;
	}
}

BowlingGame.prototype.roll = function(pins) {
	/*var previous 		 = this.currentRoll - 1,
		previousRoll 	 = this.rolls[previous],
		previousRollType = this.rollsType[previous],
		rollType 		 = 'regular';

	if (this.previousRollType !== 'regular' || this.rollsType[previous - 1] === 'strike') {
		pins *= 2; 
	}	

	if (this.previousRollType === 'regular' &&  this.rollsType[previous - 1] !== 'strike' && pins === 10) {	
		if (this.firstAttempt) {
			rollType = "strike";
		} else {
			rollType = 'spare';
		}	
	} 
	

	*/
    this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.score = function() {
    var score = 0;
    var frameIndex = 0;
    var self = this;

    function sumOfBallsInFrame() {
        return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
    }

    for (var frame = 0; frame < 10; frame++) {
        score += sumOfBallsInFrame();
        frameIndex += 2;
    }
    return score;
};
