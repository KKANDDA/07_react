import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMenusDetail } from "../api/MenuAPI";



const MenuDetails =({selectedMenu, setSelectedMenu})=>{
    const {id} = useParams();

    const [menu,setMenu] = useState(
        {
            name:"",
            price:"",
            description:""
        }
    );

    const checkMenu = useNavigate();

    useEffect(()=>{
        setMenu(getMenusDetail(id));
    })

    const onClickHandler =()=>{

            setSelectedMenu([...selectedMenu,menu]);
            checkMenu("/cart");        
    }

    return(
        <>
        <h2>이름: {menu.name}</h2>
        <h2>가격: {menu.price}</h2>
        <h2>설명: {menu.description}</h2>

        <button onClick={()=>{onClickHandler()}}>장바구니에 담기</button>
        <button onClick={()=>{checkMenu("/menu")}}>메뉴로 돌아가기</button>
        </>
    )
}
export default MenuDetails;