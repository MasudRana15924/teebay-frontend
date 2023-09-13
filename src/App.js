import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import CreateTitle from './components/product/CreateTitle';
import CreateCategory from './components/product/CreateCategory';
import CreateDesc from './components/product/CreateDesc';
import CreatePrice from './components/product/CreatePrice';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes >
            <Route path="/user/registration" element={<Register></Register>}/>
            <Route path="/user/login" element={<Login></Login>}/>
            <Route path="/create" element={<CreateTitle></CreateTitle>}/>
            <Route path="/select/category" element={<CreateCategory></CreateCategory>}/>
            <Route path="/select/description" element={<CreateDesc></CreateDesc>}/>
            <Route path="/select/price" element={<CreatePrice></CreatePrice>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
