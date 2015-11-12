(function(document){
	'use strict';

	var app = document.querySelector('#app');

	window.addEventListener('WebComponentsReady', function() {
		
		// imports are loaded and elements have been registered


		app.openDialog = function(event){
			var id = event.currentTarget.getAttribute('data-dialog');
			var dialog = document.getElementById(id);
			if (dialog){
				dialog.open();
			}
		};

		app.setCurrentCity = function(){
			var city = document.getElementById('input-currentcity').value;
			app.currentcity = city;
		};

	});

})(document);