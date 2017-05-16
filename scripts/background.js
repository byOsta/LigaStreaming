//Codigo segundo plano
(function(){
	console.log("prueba");
	function setBadge(info, colorInfo){

		var ba = chrome.browserAction;
		ba.setBadgeBackgroundColor({color: colorInfo});
		ba.setBadgeText({text: '' + info});
	}

	function init(){
		setBadge(6, [255, 0, 0, 128]);
	}
	init();
})();
