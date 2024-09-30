import { NavLink } from "react-router-dom";



const NavBar =()=>{
    const activeStyle ={
        backgroundColor: "pink"
    }

    return(
        <div>
            <ul>
                <li><NavLink // 이건 그냥 제공해 주는 것. to로 보내면 Router에서 받는다.
                        to={"/"}
                        style={({isActive})=> isActive? activeStyle : undefined}>home</NavLink></li>
                <li><NavLink
                        to={"/main"}
                        style={({isActive})=> isActive? activeStyle : undefined}>main</NavLink></li>
                <li><NavLink
                        to={"/mypage"}
                        style={({isActive})=> isActive? activeStyle : undefined}>mypage</NavLink></li>
                <li><NavLink
                        to={"/login"} // 현재 선택되어 있으면 트루
                        style={({isActive})=> isActive? activeStyle : undefined}>login</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;