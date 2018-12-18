var borrowerhandler ={
    addBorrower: function (borrowerID,Lname,Fname,Bookinfo,Dates) {
        databasehandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "Insert into borrow(borrowerID,Lname,Fname,Bookinfo,Dates)" + 
                    "values(?,?,?,?,?)",
                    [borrowerID,Lname,Fname,Bookinfo,Dates],
                    function(tx,result){},
                    function(tx,error){
                        console.log("add borrow error: "+error.message);
                    }
                );
            },
            function(error) {},
            function(){}
        );
    },

    
loadborrower: function(displayBorrow){
    databasehandler.db.readTransaction(
        function(tx){
            tx.executeSql( 
                "Select * From borrow",
                [],
                function(tx,result){
                    displayBorrow(result);
                },
                function(tx,error){
                    console.log("Error")
                }
            );
           

        }
    )
}
};