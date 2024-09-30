import {NavLink} from "react-router-dom"

const Navbar =()=>{

    return(
        <div>
            <ul>
                
                <li>
                    <NavLink
                        to={"/main"}>
                    호무!!!!!!!!!!!!!!!
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/menu"}>
                    메뉴!!!!!!!!!!!!!!!!
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/cart"}>
                    장바구니!!!!!!!!!!!!!
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )
}
export default Navbar;