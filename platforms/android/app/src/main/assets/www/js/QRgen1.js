var qrcode = new QRCode(document.getElementById("qrcode1"),
{
    width: 200,
    height: 200
}
);

function makeCode() {
var text1 = $("#txtNumber").val();
var elText = text1;
qrcode.makeCode(elText);
}

makeCode();

$("#add").
on("click", function () {
    makeCode();
    $("#txtNumber").empty();
    var text1 = $("#txtNumber").val();
    
}).
on("keydown", function (e) {
    if (e.keyCode == 13) {
        makecode();
    }
});
