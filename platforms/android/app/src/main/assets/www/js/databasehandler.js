var databasehandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "DBtest.db",
            "1.0",
            "borrow database", 10000);
        this.db.transaction(

            function (tx) {
                tx.executeSql(
                    " create table if not exists borrowers(borrowerID integer primary key, Lname text, Fname text) ",
                    [],
                    function (tx, result) { },
                    function (tx, error) {
                        console.log("Error while creating a table" + error.message)
                    }
                );

                tx.executeSql(
                    " create table if not exists book(borrowerID integer primary key, Lname text, Fname text,bookinfo text,datebr date) ",
                    [],
                    function (tx, result) { },
                    function (tx, error) {
                        console.log("Error while creating a table" + error.message)
                    }
                );
            },

            function (error) {
                console.log("transaction Error" + error.message);
            },
            function () {
                console.log("Create DB transaction Complete");
            }
        );

    }
}