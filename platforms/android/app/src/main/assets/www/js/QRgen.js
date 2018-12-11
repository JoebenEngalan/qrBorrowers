var qrcode = new QRCode(document.getElementById("qrcode"),
    {
        width: 200,
        height: 200
    }
);

function makeCode() {
    var text1 = $("#bknum").val();
    var text2 = $("#bkname").val();
    var text3 = $("#ath").val();
    var text4 = $("#gnr").val();
    var elText = text1 + '|' + text2 + '|' + text3 + '|' + text4;
    qrcode.makeCode(elText);
}

makeCode();

$("#btnin").
    on("click", function () {
        makeCode();
        $("#bknum").empty();
        $("#bkname").empty();
        $("#ath").empty();
        $("#gnr").empty();
        var text1 = $("#bknum").val();
        var text2 = $("#bkname").val();
        var text3 = $("#ath").val();
        var text4 = $("#gnr").val();


    }).
on("keydown", function (e) {
        if (e.keyCode == 13) {
            makecode();
        }
    }
);