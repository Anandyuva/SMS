import React from "react";

const Emi=()=>{
    return(
        <>

        <form>
            <h1>EMI Page</h1>
                 <div className="col-6" style={{margin:"0 25rem"}}>
                    <label>Enter Product Name</label>
                    <input type="text" class="form-control" />
                    <label>Enter Total Amount</label>
                    <input type="number" class="form-control" />    
                    <label>Enter Monthly EMI</label>
                    <input type="number" class="form-control" />
                    <label>EMI Tenure</label>
                    <input type="number"  class="form-control"/>
                    <input type="button" value="Confirm" class="btn btn-success" style={{margin:"1rem 0"}}/>
                    
                    
                 </div>    
        </form>
        </>
    );
}
export default Emi;