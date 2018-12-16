$(document).on("ready", function () {
    databasehandler.createDatabase();
});
function addBorrower() {
    var borrowerID = $("#txtNumber").val();
    var Lname = $("#txtLname").val();
    var Fname = $("#txtFname").val();
    borrowerhandler.addBorrower(borrowerID, Lname, Fname);
    $("#txtNumber").val("");
    $("#txtLname").val("");
    $("#txtFname").val("");
};

function bookborrow(){
    var borrowerID = $("#txtNumber1").val();
    var Lname = $("#txtLname1").val();
    var Fname = $("#txtFname1").val();
    var bookinfo = $("#bookInfo").val();
    var datebr = $("#datebrw").val();
    borrowerhandler.bookborrow(borrowerID, Lname, Fname, bookinfo, datebr);
    $("#txtNumber1").val("");
    $("#txtLname1").val("");
    $("#txtFname1").val("");
    $("#bookInfo").val();
    $("#datebrw").val();
};