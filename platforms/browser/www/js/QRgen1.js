var qrcode = new QRCode(document.getElementById("qrcode1"),
    {
        width: 199,
        height: 200
    }
);

function makeCode() {
    var text1 = $("#txtNumber").val();
    var text2 = $("#txtLname").val();
    var text3 = $("#txtFname").val();
    var elText = text1 + '|' + text2 + '|' + text3;
    qrcode.makeCode(elText);
}

makeCode();

$("#btnin").
    on("click", function () {
        makeCode();
        $("#txtNumber").empty();
        $("#txtLname").empty();
        $("#txtFname").empty();
        var text1 = $("#txtNumber").val();
        var text2 = $("#txtLname").val();
        var text3 = $("#txtFname").val();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makecode();
        }
    });
