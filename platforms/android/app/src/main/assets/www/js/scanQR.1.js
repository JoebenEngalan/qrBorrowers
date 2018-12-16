var resultDiv;
var resultDiv1;
var resultDiv2;

document.addEventListener("deviceready", init, false);

function init() {
    document.querySelector("#startScan1").
        addEventListener("touchend", startScan, false);
	
	resultDiv = document.querySelector("#txtNumber");
	
	resultDiv1 = document.querySelector("#txtFname");

	resultDiv2 = document.querySelector("#txtLname");
	
	
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
        
        function (result) {
			
			var result ;
			arr = result.text.split('|');
			i;
			
			for(i in arr){
				result.format;
				result.cancelled;
				resultDiv.value = arr[0];
				resultDiv1.value = arr[1];
				resultDiv2.value = arr[2];
			}

		/*	var s = result.text.split('|');
            result.format;
			result.cancelled;
			resultDiv.value = s;*/
		
		},
        

		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	

}
