function debug_functionality() {
	//adds functionality dependent on addEventListener
	document.querySelector("#debug_mode").addEventListener("click", debug_button_switch);

}
/**
*	Debug mode
*
*	This toggles the opponent ships' visibility
*
*
*
*/
function debug_button_switch() {
	console.log("debug_switcher_toggled");
		//toggle debug status to 1 if it is 0
		if (debug_status == 0) {
			debug_status = 1;
			console.log("debug_status: " + debug_status);
			document.querySelector("#debug_mode").style.background = "hsl(115, 63%, 51%)";
      for ( i=1; i<ship_array.length; i++ )
      {
        for ( j=1; j<ship_array[i].length; j++ )
        {
          ship_array[i][j].style.background = "red";
        }
      }

		}
		//toggle debug status to 0 if it is 1
		else if (debug_status == 1) {
			debug_status = 0;
			console.log("debug_status: " + debug_status);
			document.querySelector("#debug_mode").style.background = "red";
      for ( i=1; i<ship_array.length; i++ )
      {
        for ( j=1; j<ship_array[i].length; j++ )
        {
          ship_array[i][j].style.background = "rgb(78, 161, 199)";
        }
      }

		}
}
