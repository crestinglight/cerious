window.addEventListener("load", function(){

	var cableDropDown = document.getElementsByClassName("js-cable__type")[0];

	cableDropDown.addEventListener("change", function(){ changeOptions(cableDropDown) });

	function changeOptions(dropdown){

		var selected = dropdown.options[dropdown.selectedIndex].value;

		hideAllOptions();

		hideAllLengths();

		detectSelected(selected);
		
	}

	function detectSelected(selected){

		switch (selected){

			case "digital":
				selectedDigital();
				break;

			case "interconnect":
				selectedInterconnect();
				break;

			case "speaker":
				selectedSpeaker();
				break;

			case "acPower":
				selectedAC();
				break;
		}
	}

	function hideAllOptions(){

		var allOptions = document.getElementsByClassName("js-option");

		for (i = 0; i < allOptions.length; i++){
			allOptions[i].style.display = "none";
		}
	}

	function hideAllLengths(){

		var allLengths = document.getElementsByClassName("js-length");

		for (i = 0; i < allLengths.length; i++){
			allLengths[i].style.display = "none";
		}
	}

	function selectedDigital(){

		var endType = document.getElementsByClassName("js-end__type")[0];

		endType.style.display = "block";

		digitalLength();
	}

	function selectedInterconnect(){

		var endType = document.getElementsByClassName("js-end__type")[0];

		endType.style.display = "block";

		interconnectLength();
	}

	function selectedSpeaker(){

		var terminations = document.getElementsByClassName("js-termination")[0];

		terminations.style.display = "block";

		speakerLength();
	}

	function selectedAC(){

		var optimization = document.getElementsByClassName("js-optimization")[0];

		optimization.style.display = "block";

		acLength();
	}


	function digitalLength(){

		var digitalLengths = document.getElementsByClassName("js-order__defaultSizes")[0];

		digitalLengths.style.display = "block";
	}

	function interconnectLength(){

		var interconnectLengths = document.getElementsByClassName("js-order__interconnectSizes")[0];

		interconnectLengths.style.display = "block";
	}

	function speakerLength(){

		var speakerLengths = document.getElementsByClassName("js-order__speakerSizes")[0];

		speakerLengths.style.display = "block";
	}

	function acLength(){

		var acLengths = document.getElementsByClassName("js-order__acSizes")[0];

		acLengths.style.display = "block";
	}

});