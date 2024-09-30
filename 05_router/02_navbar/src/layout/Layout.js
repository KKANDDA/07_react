import Header from "../components/Header";
import NavBar from "../components/NavBar";

import { Outlet } from "react-router-dom";

const Layout =()=>{

    return(
        <>
            <Header/>
            <NavBar/> 
            <Outlet/> {/* 상기 두 component는 고정으로 두고 Outlet은 사용자의 선택에 따라 바뀔 내용이다*/}
        </>
    )
}
export default Layout;