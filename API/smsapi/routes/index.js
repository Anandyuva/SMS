
var express = require('express');
const { EMI } = require('../models/EMI');
var router = express.Router();
var connection=require('./connections')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/saveEMI',(req,res)=>{
  let productName=req.body.productname;
  let totalAmount=req.body.totalAmount;
  let monthlyEMI=req.body.monthlyEMI;
  let tenure=req.body.tenure;
  var insertQuery=`INSERT INTO emi (productname,totalamount, monthlyemi, tenure) VALUES ('${productName}',${totalAmount} , ${monthlyEMI} , ${tenure} )`;
  connection.query(insertQuery,(err,result)=>{
    if(err){
      res.send(false)
    }else{
      res.send(true)
    }
  })
})
router.post('/saveExpenses',(req,res)=>{
  let expenseName=req.body.name;
  let amount=req.body.amount;
  var insertQuery=`INSERT INTO expenses (name, amount) VALUES ('${expenseName}', ${amount})`
  connection.query(insertQuery,(err,result)=>{
    if(err){
      res.send(false)
    }else{
      res.send(true)
    }
  })
})
router.post('/saveSalary',(req,res)=>{
  let salary=req.body.salary;
  var insertQuery=`INSERT INTO master (salary) VALUES (${salary})`
  connection.query(insertQuery,(err)=>{
    if(err){
      res.send(false)
    }else{
      res.send(true)
    }
  })
})

module.exports = router;
