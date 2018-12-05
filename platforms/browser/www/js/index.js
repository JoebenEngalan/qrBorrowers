$(document).on("ready",function(){
    databasehandler.createDatabase();
});
function addBorrower(){
    var borrowerID = $("#txtNumber").val();
    var Lname = $("#txtLname").val();
    var Fname = $("#txtFname").val();
    var addresses = $("#txtaddress").val();
    var email = $("#txtEmail").val();
    var Mobile = $("#txtMobNum").val();
    borrowerhandler.addBorrower(borrowerID,Lname,Fname,addresses,email,Mobile);
    $("#txtNumber").val("");
    $("#txtLname").val("");
    $("#txtFname").val("");
    $("#txtaddress").val("");
    $("#txtEmail").val("");
    $("#txtMobNum").val("");
}