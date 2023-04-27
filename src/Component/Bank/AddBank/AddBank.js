import React from 'react'
import './AddBank.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
function AddBank() {
    const details = useParams();
    const navigateObject = new useNavigate()
    const fullName = useRef();
    const abbreviation = useRef();
    const id = useRef()
    const AddBank = async(e)=>{
        const bankDet = {
            fullName:fullName.current.value,
            abbreviation:abbreviation.current.value
        }
        if(fullName=="" || abbreviation==""){
            alert("enter the bank name or abbreviation")
            return
        }
        const resp = await axios.post(`http://localhost:8080/bank/save`,{
            "fullName":bankDet.fullName,
            "abbreviation":bankDet.abbreviation
        }).catch(err =>{
            // 
            if(err.response.status  === 400)
            {
                alert(err.response.data);
                return
            }
            
        })

    }
    const EditBank = async(e)=>{
        console.log("edit bank");
       
       
        console.log(details);
         const i = details.id;
        console.log("param",i);
        console.log("hm");
        const bankDet = {
            id:i,
            fullName:fullName.current.value,
            abbreviation:abbreviation.current.value
        }
        if(fullName=="" || abbreviation==""){
            alert("enter the bank name or abbreviation")
            return
        }
        const resp = await axios.put(`http://localhost:8080/bank/edit`,{
            "bankId":bankDet.id,
            "fullName":bankDet.fullName,
            "abbreviation":bankDet.abbreviation
        }).catch(err =>{
            // 
            if(err.response.status  === 400)
            {
                alert(err.response.data);
                return
            }
            
        })

    }
  return (
    <div>
        <form id='form'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Bank name</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  ref={fullName}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Abbreviation</label>
    <input type="text" className="form-control" id="exampleInputPassword1" ref={abbreviation} />
  </div>
  
  <button  className="btn btn-primary" id='btn' onClick={(e)=>{
    AddBank(e)
    navigateObject('/admindashboard/bank')
  }}>Add me</button>
   <button  className="btn btn-primary" id='btn1' onClick={(e)=>{
    EditBank(e)
    navigateObject('/admindashboard/bank')
  }}>Save Changes</button>
</form>
    </div>
  )
}

export default AddBank