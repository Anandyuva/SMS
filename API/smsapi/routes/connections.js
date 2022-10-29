
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"sms"
})
con.connect((err)=>{
    if(err){
        console.error("Failed to connect to DB")
    }else{
        console.log("Connected");
    }
})

module.exports=con;