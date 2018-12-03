var resultDiv;

document.addEventListener("deviceready", init, false);

function init() {
    document.querySelector("#startScan").
        addEventListener("touchend", startScan, false);
	
	resultDiv = document.querySelector("#results");
	
	document.getElementById("text4").value = resultDiv;
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
        
        function (result) {
			var s = result.text.split('|');
            result.format;
			result.cancelled;

			resultDiv.innerHTML = s;
        }, 
        

		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	

}
