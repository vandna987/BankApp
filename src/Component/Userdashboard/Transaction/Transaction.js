import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Transaction() {
  const navigateObject = new useNavigate();
  const toAccNum = useRef()
  const fromAccNum = useRef()
  const amount = useRef()
  const param = useParams()

  console.log(param.accid);
  console.log(param.cusid);
  const doTransaction = async(e)=>{
    const trnsDet={
    toAccNum:toAccNum.current.value,
    fromAccNum:fromAccNum.current.value,
    amount:amount.current.value
  }

   const resp = await axios.put(`http://localhost:8080/account/${trnsDet.toAccNum}/${trnsDet.fromAccNum}/${trnsDet.amount}`,{

   })
  
 
  // 
  
  console.log(trnsDet.fromAccNum);

  }

  
  return (
    <>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sending from account</label>
    <input type="number" class="form-control" value={param.accid} ref={fromAccNum}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Sending to account</label>
    <input type="number" class="form-control" ref={toAccNum} />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Ammount</label>
    <input type="number" class="form-control" id="exampleInputPassword1" ref={amount}/>
  </div>
  <div class="mb-3 form-check">
  <label for="exampleDataList" className="form-label" >Select </label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                <datalist id="datalistOptions" >
                   <option>Tranfer</option>
                   <option>Withdraw</option>
                   <option>Deposite</option>
                </datalist>
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e)=>{
    doTransaction(e)
    navigateObject(`/userdashboard/${param.cusid}`)
    }}>Submit</button>
</form>
    </>
  )
}

export default Transaction