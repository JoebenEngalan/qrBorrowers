$(document).on("ready",function(){
    databasehandler.createDatabase();
});
function addBorrower(){
    var borrowerID = $("#txtNumber").val();
    var Lname = $("#txtLname").val();
    var Fname = $("#txtFname").val();
    borrowerhandler.addBorrower(borrowerID,Lname,Fname);
    $("#txtNumber").val("");
    $("#txtLname").val("");
    $("#txtFname").val(""); 
}

function bookborrow(){
    var borrowerID = $("#txtNumber").val();
    var Lname = $("#txtLname").val();
    var Fname = $("#txtFname").val();
    borrowerhandler.bookborrow(borrowerID,Lname,Fname,bookinfo);
    $("#txtNumber").val("");
    $("#txtLname").val("");
    $("#txtFname").val(""); 
}