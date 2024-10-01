import { useEffect, useState } from "react";
import { getMenus } from "../api/MenuAPI";
import MenuItem from "../components/MenuItem";

import {useNavigate} from "react-router-dom";

const Menu =()=>{

    const [menus,setMenus] = useState([]);
    const checkCart = useNavigate();

    useEffect (
        ()=>{
            setMenus(getMenus())
        }, []
    )

    return(
        <>
            <h1>메뉴</h1>
            <h4>메뉴를 선택하시면 상세 설명을 보여드립니다.</h4>
            <div>
            {menus.map(menu=> <MenuItem key={menu.id} menu={menu}/>)}
            </div>
            <button onClick={()=>{checkCart("/cart")}}>주문내역 확인하기</button>
        </>
    )
}
export default Menu;