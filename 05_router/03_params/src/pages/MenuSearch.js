import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { searchMenu } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";



const MenuSearch =()=>{

    const [search] = useSearchParams(); // ?표 뒤에 오는 값을 배열로 받았다. 배열로 구조분해 할당을 받았다.

    const searchMenuName = search.get("menuName");
    const [menuList, setMenuList] = useState([]);

    useEffect (()=>{
        setMenuList(searchMenu(searchMenuName));
    }, [])

    return(
        <>
            <h1>검색 결과</h1>
            <div className="MenuBox">
                {menuList.map(menu => 
                    <MenuItem key={menu.menuCode} menu={menu}/>
                )}
            </div>
        </>
    )
}
export default MenuSearch;