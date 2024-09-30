import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
