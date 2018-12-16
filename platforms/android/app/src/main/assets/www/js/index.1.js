$(document).on("ready", function () {
    databasehandler.createDatabase();
});

function bookborrow(){
    var bID = $("#txtNumber1").val();
    var Lname1 = $("#txtLname1").val();
    var Fname2 = $("#txtFname1").val();
    var bookinfo = $("#bookInfo").val();
    var datebr = $("#datebrw").val();
    borrowerhandler.bookborrow(bID, Lname1, Fname2, bookinfo, datebr);
    $("#txtNumber1").val("");
    $("#txtLname1").val("");
    $("#txtFname1").val("");
    $("#bookInfo").val();
    $("#datebrw").val();
};