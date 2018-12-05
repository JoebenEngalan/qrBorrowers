var borrowerhandler ={
    addBorrower: function (borrowerID,Lname,Fname,addresses,email,Mobile) {
        databasehandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "Insert into borrowers(borrowerID,Lname,Fname,addresses,Email,MobileNumber)" + 
                    "values(?,?,?,?,?,?)",
                    [borrowerID,Lname,Fname,addresses,email,Mobile],
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