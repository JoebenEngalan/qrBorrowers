var borroweraddhandler ={
    addborrower: function (borrowerID,Lname,Fname,address,email,Mobile) {
        databasehandler.db.transaction(
            function(tx){
                tx.excuteSql(
                    "Insert into Borrowers(borrowerID,Lname,Fname,Address,Email,Mobile Number) values(?,?,?,?,?,?)",
                    [borrowerID,Lname,Fname,address,email,Mobile],
                    function(tx,result){},
                    function(tx,error){
                        console.log("add borrower error: "+error.message);
                    }
                );
            },
            function(error) {},
            function(){}
        );
    }
};