document.getElementById("downloadFile").addEventListener("click", downloadFile);

function downloadFile() {
    
    var fileTransfer = new FileTransfer();
    
    var imgData = document.getElementById('screenshot').src;
    
    var uri = imgData;
    var fileURL =  "New folder";
 
    fileTransfer.download(
        uri, fileURL, function(entry) {
          console.log("download complete: " + entry.toURL());
       },
         
       function(error) {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("download error code" + error.code);
       },
         
       false, {
          headers: {
             "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
          }
       }
    );
 }