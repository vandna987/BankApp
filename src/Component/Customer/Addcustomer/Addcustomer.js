import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function Addcustomer() {
    const navigateObject = new useNavigate()
    const [banks, setBanks] = useState([])
    const firstName = useRef();
    const lastName = useRef();
    const password = useRef();
    const param = useParams();

    const editCustomer = async(e)=>{
        const id = param.id
        console.log(id);
        const custDet = {
            id:id,
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            // password:password.current.value
        }
        const resp = await axios.put(`http://localhost:8080/customer/edit`,{
            "customerId":custDet.id,
            "firstName":custDet.firstName,
            "lastName":custDet.lastName
        }).catch(err =>{
            // 
            if(err.response.status  === 400)
            {
                alert(err.response.data);
                return
            }
            
        })
    }

    const saveCustomer  = async(e)=>{
        e.preventDefault();
        console.log("save Hitt");
        console.log(firstName.current.value);
        const custDet = {
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            // password:password.current.value
        }
        console.log(custDet.firstName);

        let resp1 = await axios.post(`http://localhost:8080/customer/save`,{
            "firstName":custDet.firstName,
            "lastName":custDet.lastName
        }).catch(err =>{
            // 
            if(err.response.status  === 400)
            {
                alert(err.response.data);
                return
            }
            
        })
       
        
    
    }

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

  const bankRows = banks.map((banks,index)=>{
    return(
        <option>{banks.fullName}</option>
    )
  })
  
  return (
    
    <div>
        <form>
  <div className="mb-3">
    <label  className="form-label" >firstName</label>
    <input type="text" className="form-control"  ref={firstName}/>
    <label  className="form-label">lastName</label>
    <input type="text" className="form-control"  ref={lastName}/>
    </div>
    {/* <label  className="form-label">select bank</label>
    <div className="input-group mb-3">
  <label className="input-group-text" for="inputGroupSelect01">Options</label>
  <select className="form-select" >
  <option selected>Choose...</option>
   {bankRows}
  </select>
</div>
    
  </div>
  <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    <label for="exampleInputPassword1" className="form-label">ConfirmPassword</label>
    <input type="password" className="form-control" id="exampleInputPassword2"/>
  <br/><br/> */}
  <button  className="btn btn-primary" onClick={(e)=>{
    saveCustomer(e)
    navigateObject(`/admindashboard/customer`)
    }}>Add Customer</button>
     <button  className="btn btn-primary" onClick={(e)=>{
    editCustomer(e)
    navigateObject(`/admindashboard/customer`)
    }}>Save Changes</button>
</form>
    </div>
  )
}

export default Addcustomer