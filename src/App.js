import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import CreateTitle from './components/product/CreateTitle';
import CreateCategory from './components/product/CreateCategory';
import CreateDesc from './components/product/CreateDesc';
import CreatePrice from './components/product/CreatePrice';
import Summary from './components/product/Summary';
import Home from './pages/Home/Home';
import SingleProduct from './pages/product/SingleProduct';
import PrivateRoute from './components/Privateroute/PrivateRoute';
import MyproductList from './pages/product/MyproductList';
import MyRentList from './pages/product/MyRentList';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes >
             <Route exact path="/"  element={<Home></Home>}/>
             <Route exact path="/home" element={<Home></Home>}/>
            <Route path="/user/registration" element={<Register></Register>}/>
            <Route path="/user/login" element={<Login></Login>}/>
            <Route path="/create" element={<PrivateRoute><CreateTitle></CreateTitle></PrivateRoute>}/>
            <Route path="/select/category" element={<PrivateRoute><CreateCategory></CreateCategory></PrivateRoute>}/>
            <Route path="/select/description" element={<PrivateRoute><CreateDesc></CreateDesc></PrivateRoute>}/>
            <Route path="/select/price" element={<PrivateRoute><CreatePrice></CreatePrice></PrivateRoute>}/>
            <Route path="/summary" element={<PrivateRoute><Summary></Summary></PrivateRoute>}/>
            <Route path="/product/:productId" element={<SingleProduct />}></Route>
            <Route path="/my/productlist" element={<PrivateRoute><MyproductList /></PrivateRoute>}></Route>
            <Route path="/my/rent/list" element={<PrivateRoute><MyRentList /></PrivateRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
