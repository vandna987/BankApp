import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navigation from '../Navigationbar/Navigation'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Bank() {
  const navigateObject = new useNavigate()
  const [banks, setBanks] = useState([])

  const getAllBanks = async (e) => {
    // e.preventDefault();
    //e.preventDefault();
    let resp = await axios.get(`http://localhost:8080/bank/get`).catch(err => {
      alert("Error found")
      return
    })
    setBanks(resp.data)
    console.log(resp.data);
  }
  useEffect(()=>{
    getAllBanks();
},[])

const addNewBank = async (e) =>{
  console.log("addBank Hitt");
  navigateObject('/admindashboard/addBank')
}

const editBank = async (e) =>{
  console.log("edit Hitt");
  console.log(e.target.parentElement.innerText); 
  const id = e.target.parentElement.parentElement.firstChild.innerText
  navigateObject(`/admindashboard/editbank/${id}`)

}
const deleteBank = async (e) =>{
  e.preventDefault();
  //  let resp = await axios.delete(`http://localhost:8080/bank/delete/${id}`)
  console.log("hitt");
  console.log(e.target.innerText);
  const id = e.target.parentElement.parentElement.firstChild.innerText
  console.log(id);
  let resp = await axios.delete(`http://localhost:8080/bank/delete/${id}`)
  e.target.parentElement.parentElement.remove(e.target.parentElement)
}
const bankRows = banks.map((bank,index)=>{
  return(
  <tr>
     
      <td>{bank.bankId}</td>
      <td>{bank.fullName}</td>
      <td>{bank.abbreviation}</td>
      <td><button type="button" class="btn btn-warning" onClick={(e)=>{editBank(e)}}>Edit</button></td>
      <td> <button type="button" class="btn btn-danger" onClick={(e)=>{deleteBank(e)}}>Delete</button></td>
      <td></td>
  </tr>
  )
})
  return (
    <div>
       <Navigation role={'admin'}/>
       <br></br><br></br><br></br>
       <button type="button" class="btn btn-danger" onClick={()=>{
        addNewBank()
       }}>Add New Bank</button>

      <table class="table table-success table-striped">
       <thead>
       <tr>
      <th scope="col">BankId</th>
      <th scope="col">BankName</th>
      <th scope="col">Abbreviation</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      </tr>
       </thead>
       <tbody>{bankRows}</tbody>
      </table>
    </div>
  )
}

export default Bank