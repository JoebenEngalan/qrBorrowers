var app = {

    initialize: function () {
        this.bindEvents();
    },
    
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function () {

        document.getElementById('btnin').addEventListener('click', function () {
            var element = document.getElementsByClassName('source-container');
            html2canvas(element, {
                onrendered: function (canvas) {
                    var dataURL = canvas.toDataURL();
                    document.getElementById('screenshot').src = dataURL;
                }
            });

        }, false);

        document.getElementById('email-image').addEventListener('click', function () {
            var imgData = document.getElementById('screenshot').src;
            cordova.plugins.email.isAvailable(
                function (isAvailable) {
                    cordova.plugins.email.open({
                        to: '',
                        cc: '',
                        bcc: [],
                        subject: 'Test',
                        attachments: ['imgData'],
                        //body:'<img src="' + imgData + '">',
                        isHtml:true
                    });
                });

        }, false);
    },
    receivedEvent: function (id) {

    }
};

app.initialize();
