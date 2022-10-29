import React from "react";
import axios from 'axios';

const saveemi=async ()=>{
    let productName=document.getElementById("productName").value;
    let totalAmount=Number.parseInt(document.getElementById("totalAmount").value);
    let monthlyEMI=Number.parseInt(document.getElementById("monthlyEMI").value);
    let tenure=Number.parseInt(document.getElementById("tenure").value);
    let reqBody={
        "productname":productName,
        "totalAmount":totalAmount,
        "monthlyEMI":monthlyEMI,
        "tenure":tenure
    }
    console.log("pushee")
    // const res=await fetch('http://localhost:3000/saveEMI',{
    //     method:"POST",
    //     mode:"no-cors",
    //     headers:{
    //         "Content-Type":"text/plain"
    //     },
    //     body:JSON.stringify({
    //         "title":"Working"
    //     })
    // });
    // console.log(res);
    axios.post('http://localhost:3000/saveEMI',reqBody).then(response=>{
        console.log(response);
    })
}

const Emi=()=>{
    return(
        <>

        <form>
            <h1>EMI Page</h1>
                 <div className="col-6" style={{margin:"0 25rem"}}>
                    <label>Enter Product Name</label>
                    <input type="text" id="productName" class="form-control" />
                    <label>Enter Total Amount</label>
                    <input type="number" id="totalAmount" class="form-control" />    
                    <label>Enter Monthly EMI</label>
                    <input type="number" id="monthlyEMI" class="form-control" />
                    <label>EMI Tenure</label>
                    <input type="number" id="tenure" class="form-control"/>
                    <input type="button" value="Confirm" onClick={saveemi} class="btn btn-success" style={{margin:"1rem 0"}}/>
                    
                    
                 </div>    
        </form>
        </>
    );
}
export default Emi;