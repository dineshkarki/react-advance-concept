import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([]);


    function addCustomer() {
        if (input) {
            // setCustomers((previousState) => [...previousState, input] )
            dispatch(addCustomerAction(input))
            setInput("");
        }
    }

    return <>
        <div>
            <h3>Add New Customer</h3>
            <input type="text" className='border rounded-md shadow-md mr-2' style={{padding:'3px'}} value={input} onChange={(e) => setInput(e.target.value) } />
            <button onClick={addCustomer} className='bg-blue-500 px-4 py-1 mr-2 text-white border rounded-md shadow-md'>Add</button>
        </div>
    </>
        
        
}