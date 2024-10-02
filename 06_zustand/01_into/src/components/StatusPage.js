import useStore from "../store";
import {useNavigate} from "react-router-dom";


const StatusPage =()=>{

    const {count} = useStore(); // 구조분해 할당..
    const navigate = useNavigate();

    return(
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>store Counter: {count}</h1>
            <div>
                <button onClick={()=>navigate("/")}>돌아가기</button>
            </div>
        </div>
    )
}
export default StatusPage;