import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/> {/*path="/" === index*/}
          <Route path="main" element={<Main/>}/> {/*자식 요소이기 때문에 /가 생략됐다*/}
          <Route path="mypage" element={<Mypage/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
