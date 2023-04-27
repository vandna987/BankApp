import { useRef } from "react";
import Navigation from "../Navigationbar/Navigation";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Login() {
    const navigateObject = new useNavigate()
    const role = useRef();
    const [users, setUsers] = useState([])

    const getAllUser = async () => {
        let resp = await axios.get(`http://localhost:8080/customer/get`).catch(err => {
            alert("Error found")
            return
        })
        setUsers(resp.data)
    }
    // const goToAdmindashboard=()=>{
    //     const role = 'admin'
    //     navigateObject(`/admindashboard/${role}`)
    // }
    const userOption = users.map((user, index) => {
        return (

            <option >{user.customerId}</option>


            
        )
    }
    )



    return (

        <div className='container mt-4 p-4'>
            <h1>Welcome to the bank app</h1>
            <h2>Select the role and go ahead</h2>


            <div className='container mt-4 p-4'>
                <form >
                <div>Login</div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="inlineCheckbox1" value="admin" />
                    <label className="form-check-label" for="inlineCheckbox1" >Admin</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="inlineCheckbox2" value="user" onClick={getAllUser} />
                    <label className="form-check-label" for="inlineCheckbox2">User</label>
                </div>
                <br />

                <label for="exampleDataList" className="form-label" >Select </label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                <datalist id="datalistOptions" >
                    {userOption}
                </datalist>



                <button type="submit" class="btn btn-success" onClick={()=>{
                    var admin = document.getElementById('inlineCheckbox1');
                    var user = document.getElementById('inlineCheckbox2')
                    if(admin.checked == true){
                        navigateObject(`/admindashboard`)
                    }
                    if(user.checked == true){
                        var username = document.getElementById('exampleDataList').value;
                        // navigateObject(`/userdashboard`)
                        navigateObject(`/userdashboard/${username}`)
                    }
                    
                    
                }}>click me</button>
                </form>
            </div>
        </div>

    )

}

export default Login