var result1;

document.addEventListener("deviceready", init, false);

function init() {
    document.querySelector("#startScan").
		addEventListener("touchend", startScan, false);
		
		result1 = document.querySelector("#bookInfo");
	
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
        
        function (result) {
		var s = result.text.split('|');
            result.format;
			result.cancelled;
			result1.value = s;
		},
        
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	

}
