window.addEventListener("load", function(){

	var modalBG = document.getElementsByClassName("js-modalBG")[0];

	var trigger = document.getElementsByClassName("js-modalTrigger")[0];

	var closer = document.getElementsByClassName("js-modal__close")[0];

	if(modalBG != null){

		modalBG.addEventListener("click", closeModal);

	}

	if(trigger != null){

		trigger.addEventListener("click", openModal);
	}
	
	if(closer != null){

		closer.addEventListener("click", closeModal);
	}

	function openModal(e){

		e.preventDefault();

		var modalDisplay = window.getComputedStyle(modalBG).getPropertyValue('display');

		if(modalDisplay === "none"){

			modalBG.style.display = "block";
		}
	}

	function closeModal(e){

		e.preventDefault();

		var modalDisplay = window.getComputedStyle(modalBG).getPropertyValue('display');

		if(modalDisplay != "none"){

			modalBG.style.display = "none";

		}
	}

});