import { useNavigate } from "react-router-dom";
import userAouthStore from "../store"


const ProfilePage =()=>{
    const {isLogin, userName, logout} = userAouthStore();
    const navi = useNavigate();

    return(
        <div style={{textAlign:"center", margin:"50px"}}>
            {isLogin?(
                <>
                    <h1>{userName}님, 환영합니다!</h1>
                    <button onClick={logout}>로그아웃</button>
                </>
            ):(
                <>
                    <h1>로그인하지 않았습니다.</h1>
                    <button onClick={()=>navi("/")}>
                        로그인하러 가기
                    </button>
                </>
            )}


        </div>

    )
}
export default ProfilePage;