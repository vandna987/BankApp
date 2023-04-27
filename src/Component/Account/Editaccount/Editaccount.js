import React from 'react'
import { useParams } from 'react-router-dom'

function Editaccount() {
    const param = useParams();
    

    const putcustomer = ()=>{
        const id = param.id


    } 

  return (
    <div>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">select the customer id</label>
    <label for="exampleDataList" className="form-label" >Select </label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                <datalist id="datalistOptions" >
                    {/* {userOption} */}
                </datalist>
    
  </div>
 
  
  <button onClick={putcustomer()} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Editaccount