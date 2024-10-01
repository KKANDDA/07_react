import {Link} from "react-router-dom";



const MenuItem =({menu})=>{

    return(
        <Link to={`/menu/${menu.id}`}>
            <div>
                <h3>{menu.name} - {menu.price}원</h3>
            </div>
        </Link>
    )
}
export default MenuItem;