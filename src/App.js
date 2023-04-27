import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admindashboard from './Component/Admindashboard/Admindashboard';
import Userdashboard from './Component/Userdashboard/Userdashboard';
import Bank from './Component/Bank/Bank';
import AddBank from './Component/Bank/AddBank/AddBank';
import Customer from './Component/Customer/Customer';
import Addcustomer from './Component/Customer/Addcustomer/Addcustomer';
import Account from './Component/Account/Account';
import Editaccount from './Component/Account/Editaccount/Editaccount';
import Transaction from './Component/Userdashboard/Transaction/Transaction';
import Alltransaction from './Component/Customer/AllTransaction/Alltransaction';
import Passbook from './Component/Userdashboard/Passbook/Passbook';
function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/admindashboard' element={<Admindashboard />}></Route>
        <Route exact path='/admindashboard/bank' element={<Bank />}></Route>
        <Route exact path='/admindashboard/addBank' element={<AddBank />}></Route>
        <Route exact path='/admindashboard/editbank/:id' element={<AddBank />}></Route>
        <Route exact path='/admindashboard/customer' element={<Customer />}></Route>
        <Route exact path='/admindashboard/addCustomer' element={<Addcustomer />}></Route>
        <Route exact path='/admindashboard/editcustomer/:id' element={<Addcustomer />}></Route>
        <Route exact path='/admindashboard/account' element={<Account />}></Route>
        <Route exact path='/userdashboard/:username' element={<Userdashboard />}></Route>
        <Route exact path='/userdashboard' element={<Userdashboard />}></Route>
        <Route exact path='/userdashboard/edit/:id' element={<Editaccount />}></Route>
        <Route exact path='/alltransaction/:id' element={<Alltransaction />}></Route>
        <Route exact path='/userdashboard/transaction/:cusid/:accid' element={<Transaction />}></Route>
        <Route exact path='/userdashboard/passbook/:accid' element={<Passbook />}></Route>
        <Route exact path='/userdashboard//:username' element={<Userdashboard />}></Route>

        {/* <Route exact path='/admindashboard/:username/:role' element={<Admindashboard/>}></Route>
       
        <Route exact path='/adduser' element={< AddNewUser />}></Route>
        <Route exact path='/userdashboard' element={<Userdashboard/>}></Route>
        <Route exact path='/random' element={<ReduxComponent/>}></Route> */}

      </Routes>
    </Router>
  );
}

export default App;
