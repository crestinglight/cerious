window.addEventListener("load", function(){

	var modalBG = document.getElementsByClassName("js-modalBG")[0];

	var trigger = document.getElementsByClassName("js-modalTrigger");

	var closer = document.getElementsByClassName("js-modal__close");

	var modalWrapper = document.getElementsByClassName("js-modal");

	if(modalBG != null){

		modalBG.addEventListener("click", closeModal);

	}

	if(trigger != null){

		for(var i = 0; i < trigger.length; i++){

			trigger[i].addEventListener("click", function(event){

				event.preventDefault();

				var clicked = this;

				determineModal(event, clicked); 
			});
		}
	}
	
	if(closer != null){

		for(var i = 0; i < closer.length; i++){

			closer[i].addEventListener("click", closeModal);
		}
	}

	function determineModal(e, clicked){

		var modalID = clicked.dataset.id;

		openModal(modalID);
	}

	function openModal(modal){

		modalBG.style.display = "block";

		var showModal = document.getElementById(modal);

		showModal.style.display = "flex";
	}

	function closeModal(e){

		e.preventDefault();

		modalBG.style.display = "none";

		for(var i = 0; i < modalWrapper.length; i++){

			modalWrapper[i].style.display = "none";
		}
	}

});