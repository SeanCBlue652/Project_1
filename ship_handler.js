/**
*	@file	This handles alerting the player
*/

/**
*	preconditions the game must have started
*	postconditions	sets all ships to have alerts
*	@param {int} ship_number takes in the number of the ship 
*	@return {void} assigns alert to ship
*/
function set_ship_to_alert_status(ship_number){
	/*
	console.log("set_ship_to_alert_status_called");
	console.log("ship_number " + ship_number);
	*/
	//if the ship is sunk, then return
	if(ship_sunk_array[ship_number] == 0){
		return;
	}
	
	//let has_not_sunk be a boolean true if there is any missme
	let has_not_sunk = 0;	
	let temp = ship_array[ship_number];
	//search through entire ship array
	/*
	console.log("length of temp: " + temp.length);
	console.log("temp : " + temp);
	*/
	for(var i = 1; i < temp.length; i++){
	
		//if one element is missme, set flag to 1 and break
		if(temp[i].firstChild.className != "hitit"){
			has_not_sunk = 1;
			break;
		}
	}
	
	//if there is no missme, then state the ship has sunk
	//console.log("has_not_sunk flag: " + has_not_sunk);
	if(has_not_sunk == 0){
		//alert the player
		alert("The ship " + ship_number + " has sunk!");
		
		//set the global flag
		ship_sunk_array[ship_number] = 0;
	}
	return;
}
/**
*	precondition	Game must have started
*	postcondition	Handles the alert status of all ships
*	@return {void} Sets the alert for all ships
*/
function set_ship_alert_handler(){
	//this is the second element in the array
	let i = 1;
	
	//to the end of the ship_array
	let k = ship_array.length - 1;
	
	//use set_ship_to_alert_status on all ships
	while(i <= k){
		set_ship_to_alert_status(i);
		i++;
	};
}
/**
*
*	precondition	Game must have started
*	postcondtion	Adds ships to array
*	@param {Object} parent board document object to source from
*	@param {int} ship_size find ship of certain size
*	@param {int} upper_bound upper bound of the board
*	@return {void} finishes adding ship to array
*/
function add_ship(parent, ship_size, upper_bound){
	//console.log("add_ship_called");
	//sets an array of to_ship of size ship_size
	//init with a 1 element array
	//let the first element define the number of spaces left on the ship
	let to_ship = [0];
	
	to_ship[0] = ship_size;
	//increments through board
	for(var i = 0; i < upper_bound; i++){
		//if the ship is of same dataset.size, then add to array
		if(parent.children[i].dataset.size == "" + ship_size){
			//push onto array
			to_ship.push(parent.children[i]);
		}
	}
	
	//add to_ship array to main array
	ship_array.push(to_ship);
	ship_sunk_array.push(1);
}
/**
*
*	preconditions	Game must have started
*	postconditions	Adds ships to array
*	@param {Object} parent board document object to source from
*	@param {int} ship_size	find ship of a certain size
*	@return {void} added ship to array
*/
function add_ship_playerSide(parent, ship_size){
	//console.log("add_ship_playerSide_called");
	//sets an array of to_ship of size ship_size
	//init with a 1 element array
	//let the first element define the number of spaces left on the ship
	let to_ship = [0];
	
	to_ship[0] = ship_size;
	for (let i = 0; i < 81; i++){
		if(parent.children[i].dataset.size == "" + ship_size){
			to_ship.push(parent.children[i]);
		}
	}
	ship_array_playerSide.push(to_ship);
	ship_sunk_array_playerSide.push(1);
}
/**
*
*	precondition Game must have started
*	postconditions attaches alert to all ship elements
*	@param {int} ship_number add alert to certain ship
*	@return {void} sends alert when ship has been sunk
*/
function set_ship_to_alert_status_playerSide(ship_number){
	//console.log("set_ship_to_alert_status_called");
	//console.log("ship_number " + ship_number);
	//if the ship is sunk, then return
	if(ship_sunk_array_playerSide[ship_number] == 0){
		return;
	}
	
	//let has_not_sunk be a boolean true if there is any missme
	let has_not_sunk = 0;	
	let temp = ship_array_playerSide[ship_number];
	//search through entire ship array
	//console.log("length of temp: " + temp.length);
	//console.log("temp : " + temp);
	for(var i = 1; i < temp.length; i++){
	
		//if one element is missme, set flag to 1 and break
		if(temp[i].firstChild.className != "hitit"){
			has_not_sunk = 1;
			break;
		}
	}
	
	//if there is no missme, then state the ship has sunk
	//console.log("has_not_sunk flag: " + has_not_sunk);
	if(has_not_sunk == 0){
		//alert the player
		alert("The ship " + ship_number + " has sunk!");
		
		//set the global flag
		ship_sunk_array_playerSide[ship_number] = 0;
	}
	return;
}
/**
*
*	precondition	Game must have started
*	postcondition	Handles all playerSide alerts
*	@return {void} handles the player side alert
*/
function set_ship_alert_handler_playerSide(){
	//this is the second element in the array
	let i = 1;
	
	//to the end of the ship_array
	let k = ship_array_playerSide.length - 1;
	
	//use set_ship_to_alert_status on all ships
	while(i <= k){
		set_ship_to_alert_status_playerSide(i);
		i++;
	};
}
