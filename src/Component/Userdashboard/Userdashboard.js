import React, { useEffect, useState } from 'react'
import Navigation from '../Navigationbar/Navigation'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
function Userdashboard() {
  console.log("userdashboard");
  const navigateObject = new useNavigate();
  const param = useParams();
  const [accounts,setAccounts] = useState([]);
  const id =param.username;
  const getCustomer = async()=>{
    const resp = await axios.get(`http://localhost:8080/customer/getallaccount/${id}`)
    console.log(resp.data);
    setAccounts(resp.data)
  }
  
  const doTransaction=(e)=>{
    var cusid = param.username
    var accid = e.target.parentElement.parentElement.firstChild.innerText;
    console.log(id);
    navigateObject(`/userdashboard/transaction/${cusid}/${accid}`)
  }

  const showPassbook=(e)=>{
    const id = e.target.parentElement.parentElement.firstChild.innerText
    console.log(id);
    navigateObject(`/userdashboard/passbook/${id}`)

  }

  const accountRows = accounts.map((account,index)=>{
    return(
    <tr>
       
        <td>{account.accNum}</td>
        <td>{account.balance}</td>
        <td>{account.customer.firstName} {account.customer.lastName}</td>
        {/* <td>{customer.balance}</td> */}
        <td>{account.customer.bank.fullName}</td>

        <td><button type="button" class="btn btn-warning" onClick={(e)=>{doTransaction(e)}} >Transact</button></td>
        <td> <button type="button" class="btn btn-danger" onClick={(e)=>{showPassbook(e)}} >Passbook</button></td>
        <td></td>
        {/* onClick={(e)=>{editBank(e)}} */}
    </tr>
    )
  })
  useEffect (()=>{
    getCustomer()
  },[])
  return (
    <div>
        <Navigation role={'user'}/>
        <table class="table table-success table-striped">
       <thead>
       <tr>
      <th scope="col">AccountNumber</th>
      <th scope="col">Amount</th>
      <th scope="col">CustomerName</th>
      
      <th scope="col">Bank</th>
      <th scope="col">Dotransaction</th>
      <th scope="col">passbook</th>
      </tr>
       </thead>
       <tbody>{accountRows}</tbody>
      </table>
    </div>
  )
}

export default Userdashboard