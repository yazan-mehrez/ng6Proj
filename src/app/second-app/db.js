const mysql=require('mysql');

const connection = mysql.createConnection({
    host  :'localhost',
    user:   'root',
    password: '',
    database: 'cources'
});


connection.connect(function(err){
    if(err){
        console.log('Error while connection to MySQL' , err);
        throw err;
    }
    console.log('connected to MYSQL');
});

module.exports = connection ;
