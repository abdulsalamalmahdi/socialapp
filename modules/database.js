const mysql = require('mysql');

const util = require('util')

const connection = mysql.createConnection({

    host : 'localhost',
    user : 'abdu',
    password : '123456',
    port : '3306',
    database: 'socialapp'
})

// query exposition promisified
const query = util.promisify(connection.query.bind(connection));

// begin transaction 

async function beginTransaction() {
    connection.beginTransaction();
}

 // commit a transaction 
 
 async function  commit() {
     connection.commit();
 }

 async function rollback () {
     connection.rollback();
 }


 module.exports = {
     query, beginTransaction, commit, rollback
 };