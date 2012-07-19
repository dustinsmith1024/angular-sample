/*
 * Serve JSON to our AngularJS client
 */
 var mysql = require('mysql');

exports.report = function (req, res) {
    var connection = mysql.createConnection({
         host     : 'localhost',
         user     : 'root',
         password : '',
         database : 'angular'
    });
  connection.connect();
  connection.query('select reports.id as id, reports.name, reports.open as open, reports.who as who, report_users.user from reports, report_users where reports.id=report_users.report_id and report_id = ?', [req.params.id], function(err, rows, fields) {
      if (err) throw err;
      console.log('Query result: ', rows);
      res.json(rows);
  });

    connection.end();

 };

exports.reports = function (req, res) {

    var connection = mysql.createConnection({
         host     : 'localhost',
         user     : 'root',
         password : '',
         database : 'angular'
    });

 connection.connect();
 connection.query('SELECT * from reports', function(err, rows, fields) {
     if (err) throw err;
     console.log('Query result: ', rows);
     res.json(rows);
 });

 connection.end();

};

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.names = function (req, res) {
    res.json({
        people: [{name:'Dustin', age: 28}, {name:'Bob', age: 72}, {name:'David', age: 23}]
    });
};