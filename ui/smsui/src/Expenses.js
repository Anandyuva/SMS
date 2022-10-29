import React from "react";

const Expenses=()=>{
    return(
        <>
        <table>
            <th>
             <h1>This is Expenses Page</h1>
            </th>
            <tr>
                <td><label>Enter Purchase Name</label></td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td><label>Enter Amount</label></td>
                <td><input type="number" /></td>
            </tr>
            <tr>
                <td><input type="Button"  value="Add"/></td>
                <td><input type="Button" value="Edit" /></td>
            </tr>
       
        </table>
        </>
    );
}
export default Expenses;