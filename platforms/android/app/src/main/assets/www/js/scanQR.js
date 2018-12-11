var resultDiv;

document.addEventListener("deviceready", init, false);

function init() {
    document.querySelector("#startScan").
		addEventListener("touchend", startScan, false);
		
	resultDiv = document.querySelector("#text4");
	
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
        
        function (result) {
		var s = result.text.split('|');
            result.format;
			result.cancelled;
			resultDiv.value = s;
		},
        
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	

}
