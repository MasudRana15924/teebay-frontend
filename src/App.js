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
            <Route path="/create" element={<CreateTitle></CreateTitle>}/>
            <Route path="/select/category" element={<CreateCategory></CreateCategory>}/>
            <Route path="/select/description" element={<CreateDesc></CreateDesc>}/>
            <Route path="/select/price" element={<CreatePrice></CreatePrice>}/>
            <Route path="/summary" element={<Summary></Summary>}/>
            <Route path="/product/:productId" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
