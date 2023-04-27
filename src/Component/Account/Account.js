import React, { useEffect, useState } from 'react'
import Navigation from '../Navigationbar/Navigation'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom';
function Account() {
  const navigateObject = new useNavigate()
    const [accounts,setAccounts] = useState([]);
    const addNewAccount = async()=>{
        const resp = await axios.post(`http://localhost:8080/account/save`,{

        })
        
        
    }
    // useEffect(()=>{
    //   add
    // })
    const editAccount = async(e)=>{
       
       const id =e.target.parentElement.parentElement.firstChild.innerText;
        navigateObject(`/userdashboard/edit/${id}`)
    }

    const deleteAccount = async(e)=>{
      const id = e.target.parentElement.parentElement.firstChild.innerText;
      const resp = await axios.delete(`http://localhost:8080/account/delete/${id}`)
      e.target.parentElement.parentElement.remove();

    }
    
    const getAllBanks = async ()=>{
        const resp = await axios.get(`http://localhost:8080/account/get`)
        setAccounts(resp.data)
        console.log(accounts);
    }

    const putCustomer = async(accNum)=>{
      const resp = await axios.put(`http://localhost:8080/customer/3/${accNum}`)
    }

    useEffect(()=>{
        getAllBanks()
    },[])
    
    const accountRows = accounts.map((account,index)=>{
      console.log(account);
      if(account.customer===null) 
      {
        putCustomer(account.accNum);
        return 
      }
        return(
        <tr>
           
            <td>{account.accNum}</td>
            <td>{account.customer.customerId}</td>
            <td>{account.customer.bank.fullName}</td>
            <td>{account.balance}</td>
            <td><button  class="btn btn-warning"  onClick={(e)=>{editAccount(e)}}  >Edit</button></td>
            <td> <button  class="btn btn-danger" onClick={(e)=>{deleteAccount(e)}} >Delete</button></td>
           
           
        </tr>
        )
      })

  return (
    <div>
         <Navigation role={'admin'}/>
         <button type="button" class="btn btn-danger" onClick={()=>{
       addNewAccount()
       }}>Add New Account</button>
        <table class="table table-success table-striped">
       <thead>
       <tr>
      <th scope="col">AccNumber</th>
      <th scope="col">customerId</th>
      <th scope="col">Bank</th>
      <th scope="col">Balance</th>
     
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      </tr>
       </thead>
       <tbody>{accountRows}</tbody>
      </table>
    </div>
  )
}

export default Account