var borrowerhandler ={
    addBorrower: function (borrowerID,Lname,Fname) {
        databasehandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "Insert into borrowers(borrowerID,Lname,Fname)" + 
                    "values(?,?,?)",
                    [borrowerID,Lname,Fname],
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