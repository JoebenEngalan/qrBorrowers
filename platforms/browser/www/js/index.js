$(document).on("ready", function () {
    databasehandler.createDatabase();
});

function addBorrower() {
    var borrowerID = $("#txtNumber").val();
    var Lname = $("#txtLname").val();
    var Fname = $("#txtFname").val();
    var Bookinfo = $("#bookInfo").val();
    var Dates = $("#datebrw").val();
    borrowerhandler.addBorrower(borrowerID, Lname, Fname,Bookinfo,Dates);
    $("#txtNumber").val("");
    $("#txtLname").val("");
    $("#txtFname").val("");
    $("#bookInfo").val("");
    $("#datebrw").val("");
}

var currentBorrower={
    ID: -1,
    borrowerID: "",
    Lname: "",
    Fname: "",
    Bookinfo: "",
    Dates: "",
}

function displayBorrow(result){
    var length = result.rows.length;
    var lstBorrow = $("#lstBorrow");
    lstBorrow.empty();
    for(var i = 0;i<length;i++){
        var item = results.rows.item(i);
        var a = $("<a />");
        var h3 = $("<h3 />").text("Borrower ID: ");
        var h4 = $("<h4 />").text("Borrower Last Name: ");
        var h4 = $("<h4 />").text("Borrower First Name: ");
        var h4 = $("<h4 />").text("Book Info : ");
        var h4 = $("<h4 />").text("Book Info : ");
        var spBid = $("<span />").text(item.borrowerID);
        spBid.attr("name", "borrowerID");
        var spLn = $("<span />").text(item.Lname);
        spLn.attr("name", "Lname");
        var spFn = $("<span />").text(item.Fname);
        spFn.attr("name", "Fname");
        var spBi = $("<span />").text(item.Bookinfo);
        spBi.attr("name", "Bookinfo");
        var spDate = $("<span />").text(item.Dates);
        spDate.attr("name", "Dates");
        h3.append(spBid);
        h4.append(spLn);
        h4.append(spFn);
        h4.append(spBi);
        h4.append(spDate);
        a.append(h3);
        a.append(h4);
        var li = $("<li/>");
        li.attr("data-filtertext", item.borrowerID);
        li.append(a);
        lstBorrow.append(li); 
    }
    lstBorrow.listview("refresh");
    lstBorrow.on("tap", "li", function(){
        currentBorrower.borrowerID = $(this).find("[name='borrowerID']").text();
        currentProduct.Fname = $(this).find("[name='Fname']").text();
        currentProduct.Fname = $(this).find("[name='Fname']").text();
        currentProduct.Bookinfo = $(this).find("[name='Bookinfo']").text();
        currentProduct.Dates = $(this).find("[name='Dates']").text();
        //Set event for the list item
        $("#popupUpdateDelete").popup("open");
    });
}

$(document).on("pagebeforeshow", "#loadpage", function(){
    displayBorrow.loadborrower(displayBorrow);
});

