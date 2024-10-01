import { useParams } from "react-router-dom";




const Cart =({selectedMenu})=>{

    return(
        <>
            <h1>장바구니</h1>
            {/* 삼항연산자로 장바구니에 아무것도 담기지 않았을 때에 보여줄 문구를 작성해 보자! */}
            {selectedMenu.length === 0 ? <h1>암 것 두 업 네 여 . . .</h1> :
            selectedMenu.map(menu =>{
                return(
                    <h3>{menu.name} - {menu.price}</h3>
                )
            })}
        </>
    )
}
export default Cart;