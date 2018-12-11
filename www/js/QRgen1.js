

var qrcode = new QRCode(document.getElementById("qrcode1"),
{
    width: 200,
    height: 200
}
);

function makeCode() {
var text1 = $("#txtLname").val();
var text2 = $("#txtFname").val();
var elText = text1 + '|' + text2;
qrcode.makeCode(elText);
}

makeCode();

$("#btnin1").
on("click", function () {
    makeCode();
    $("#txtLname").empty();
    $("#txtFname").empty();
    var text1 = $("#txtLname").val();
    var text2 = $("#txtFname").val();

}).
on("keydown", function (e) {
    if (e.keyCode == 13) {
        makecode();
    }
});
