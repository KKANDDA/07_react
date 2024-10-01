import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuDetails from "./pages/MenuDetails";
import MenuSearch from "./pages/MenuSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="main" element={<Main/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path=":menuCode" element={<MenuDetails/>}/>
              {/* ex) localhost:3000/menu/30 -> menuCode=30(30을 담았다) // url 파라메터 // :를 이용해야 변수처럼 담을 수 있다*/}
              <Route path="search" element={<MenuSearch/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
