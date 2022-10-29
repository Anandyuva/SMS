import React from "react";

const Expenses=()=>{
    return(
        <>
        <form>
             <h1>This is Expenses Page</h1>
             <div className="col-6" style={{margin:"0 25rem"}}>
                <label>Enter Purchase Name</label>
                <input type="text" class="form-control" />
                <label>Enter Amount</label>
                <input type="number" class="form-control" />
                <input type="Button"  value="Add" class="btn btn-success" style={{margin:"1rem 0"}} />
                <input type="Button" value="Edit" class="btn btn-danger" style={{marginLeft:"5px"}} />
                </div>
             </form>
        </>
    );
}
export default Expenses;