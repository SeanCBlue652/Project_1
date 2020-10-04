function new_mark_system_0(element) {
	return () => {
		if (started && placeable == 1 && ai_selector == 1) {
			if (specialShotStatus == "firing") {
				if (element.className != "square") {
					element.firstChild.className = "hitit";
					remainingShots -= 1;
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

function marker(element) {
	if (ai_selector == 1) {
		return new_mark_system(element);
	}
	return mark(element);
}
