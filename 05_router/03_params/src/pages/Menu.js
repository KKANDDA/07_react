import {useState, useEffect} from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import menuStyle from "./Menu.css"; // css는 전역변수로 설정되어 있기에 모듈화 하여 꺼내 쓰는 것이 안전하다.
import {useNavigate} from "react-router-dom";


const Menu =()=>{
    const [menuList,setMenuList] = useState([]);
    const [searchValue,setSearchValue] =useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setMenuList(getMenuList()); // 메뉴 전체를 담았다.
    }, []) // 최초 마운트 시에만.....

    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`); // ?뒤에 오는 값을 쿼리스팅 파라메터라고 한다. 키=밸류
    }

    return(
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="search" name="menuName"
                    onChange={e=>{setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>검색</button>
            </div>

            <div className={menuStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}
export default Menu;