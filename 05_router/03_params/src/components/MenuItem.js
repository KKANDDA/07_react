import "./MenuItem.css" // 혹시 이름이 같은 클래스 네임이 있으면 전역변수로 인식되어 엄한 곳이 바뀔 수 있다.
import{Link} from "react-router-dom";



const MenuItem =({menu})=>{

    return(
        <Link to={`/menu/${menu.menuCode}`}>
            <div className="MenuItem">
                <h3>이름: {menu.menuName}</h3>
                <h3>가격: {menu.menuPrice}</h3>
                <h3>분류: {menu.categoryName}</h3>
            </div>
        </Link>
    )
}
export default MenuItem;