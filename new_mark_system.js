/**
*	@file	This file is a update to the original mark system used
*/

/**
*	
*	@param {Object} element this a document object that reperesents each cell of board
*	@return {Function} new_mark_system that handles AI part of the game
*	precondition	Must have board elements pre-defined
*	postcondition	Returns a function that is called by addEventListener to each element
*/
function new_mark_system_0(element) {
	return () => {
		if (started && placeable == 1 && ai_selector == 1) {
			if (specialShotStatus == "firing") {
				remainingShots -= 1;
				if (element.className != "square") {
					element.firstChild.className = "hitit";
					//remainingShots -= 1;
					if (remainingShots > 1) {
						alert("Hit! You have " + remainingShots + " shots remaining on this turn.");
					}
					else {
						alert("Hit! You have 1 shot remaining on this turn.");
					}
				}
				else {
					element.firstChild.className = "missme";
					if (remainingShots > 1) {
						alert("Miss! You have " + remainingShots + " shots remaining on this turn.");
					}
					else {
						alert("Miss! You have 1 shot remaining on this turn.");
					}
				}
				if (remainingShots < 1) {
					console.log("Special shot is over");
					specialShotStatus = "finished";
				}
			}
			else {
				if (element.className != "square") {
					element.firstChild.className = "hitit";
				}
				else {
					element.firstChild.className = "missme";
				}
			}
		}
	}
}
/**
*	
*	@param	{Object} element takes in element and assigns eitehr old or new mark
*	@return {Function} marksys returns relevant system to use based on game
*	precondition	must have board element pre-defined
*	postcondition	Returns a function when aI_selector is either at 1 or 0
*/
function marker(element) {
	if (ai_selector == 1) {
		return new_mark_system(element);
	}
	return mark(element);
}
