window.addEventListener("load", function(){

	var modalBG = document.getElementsByClassName("js-modalBG")[0];

	var trigger = document.getElementsByClassName("js-modalTrigger")[0];

	trigger.addEventListener("click", openModal);

	function openModal(e){

		e.preventDefault();

		var modalDisplay = window.getComputedStyle(modalBG).getPropertyValue('display');

		if(modalDisplay === "none"){

			modalBG.style.display = "block";
		}
	}

});