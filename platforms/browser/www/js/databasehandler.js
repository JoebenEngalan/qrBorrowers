var databasehandler = {
    db:null,
    createDatabase: function(){
        this.db = window.openDatabase(
            "DBtest.db",
            "1.0",
            "borrow database",10000);
        this.db.transaction(
            function(tx) {
                ////
                tx.executeSql(
                    " create table if not exists borrowers(borrowerID integer primary key, Lname text, Fname text, Fname text, addresses text, Email text, MobileNumber integer) ",
                    [],
                    function(tx,result){},
                    function(tx,error) {
                        console.log("Error while creating a table"+ error.message)
                    }
                );
            },
            function(error){
                console.log("transaction Error" + error.message);
            },
            function(){
                console.log("Create DB transaction Complete" );
            }
        );
        
    }
}