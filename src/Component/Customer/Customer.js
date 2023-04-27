import React, { useState } from 'react'
import Navigation from '../Navigationbar/Navigation'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Customer() {
    const navigateObject = new useNavigate()
    const [customer,setCustomer] =useState([])
    
    const addNewCustomer = ()=>{
        navigateObject('/admindashboard/addCustomer')

    }

    const editCustomer = (e)=>{
        const id = e.target.parentElement.parentElement.firstChild.innerText
        navigateObject(`/admindashboard/editcustomer/${id}`)


    }

    const deleteCustomer = async (e)=>{
        var id = e.target.parentElement.parentElement.firstChild.innerText
        console.log(id);

         const resp =  await axios.delete(`http://localhost:8080/customer/delete/${id}`)
         e.target.parentElement.parentElement.remove(e.target.parentElement)

    }
    

    const getAllCustomer = async ()=>{
        const resp = await axios.get(`http://localhost:8080/customer/get`).catch(err => {
            alert("Error found")
            return
          })
          console.log(resp.data);
          setCustomer(resp.data)
    }
    useEffect(()=>{
        getAllCustomer();
    },[])
    
    

    const customerRows = customer.map((customer,index)=>{
        return(
        <tr>
           
            <td>{customer.customerId}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            {/* <td>{customer.balance}</td>
            <td>{customer.bank}</td> */}

            <td><button type="button" class="btn btn-warning"  onClick={(e)=>{editCustomer(e)}}  >Edit</button></td>
            <td> <button type="button" class="btn btn-danger" onClick={(e)=>{deleteCustomer(e)}} >Delete</button></td>
            <td></td>
            {/* onClick={(e)=>{editBank(e)}} */}
        </tr>
        )
      })

  return (
    <div>
        <Navigation role={'admin'}/>
        <br></br><br></br><br></br>
       <button type="button" class="btn btn-danger" onClick={()=>{
       addNewCustomer()
       }}>Add New Customer</button>
        <table class="table table-success table-striped">
       <thead>
       <tr>
      <th scope="col">CustomId</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      {/* <th scope="col">Balance</th>
      <th scope="col">Bank</th> */}
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      </tr>
       </thead>
       <tbody>{customerRows}</tbody>
      </table>
        
    </div>
  )
}

export default Customer