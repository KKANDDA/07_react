import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./Nav-pages/Main";
import Menu from "./Nav-pages/Menu";
import Cart from "./Nav-pages/Cart";
import MenuDetails from "./Nav-pages/MenuDetails";
import { useState } from "react";


function App() {

   const [selectedMenu,setSelectedMenu] =useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path=":id" element={<MenuDetails selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>}/>
            </Route>
            <Route path="cart" element={<Cart  selectedMenu={selectedMenu}/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
