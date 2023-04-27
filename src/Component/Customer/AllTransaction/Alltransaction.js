import React, { useEffect, useState } from 'react'
import Navigation from '../../Navigationbar/Navigation'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Alltransaction() {
    const param = useParams();
    const [transactions,setTransactions] = useState([]);
    
    const getAllTransaction = async()=>{
        const id = param.id;
        const resp = await axios.get(`http://localhost:8080/customer/getalltransaction/${id}`)
        console.log(resp.data);
        setTransactions(resp.data)
    }

    useEffect(()=>{
        getAllTransaction()
    },[])

    const transactionsRows = transactions.map((transaction,index)=>{
        return(
        <tr>
           
            <td>{transaction.transactionId}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.time}</td>
            <td>{transaction.transactionType}</td>
            <td>{transaction.toAccount.accNum}</td>
            <td>{transaction.fromAccount.accNum}</td>

           
            <td> <button type="button" class="btn btn-danger"  >Delete</button></td>
            <td></td>
            {/* onClick={(e)=>{editBank(e)}} */}
        </tr>
        )
      })

  return (
    <>
    <Navigation role={'user'}/>
    <table class="table table-success table-striped">
       <thead>
       <tr>
      <th scope="col">TransactionId</th>
      <th scope="col">ammount</th>
      <th scope="col">time</th>
      <th scope="col">Transaction type</th>
      <th scope="col">From acc num</th>
      <th>To acc num</th>
      
      <th scope="col">Delete</th>
      </tr>
       </thead>
       <tbody>{transactionsRows}</tbody>
      </table>
    </>
  )
}

export default Alltransaction