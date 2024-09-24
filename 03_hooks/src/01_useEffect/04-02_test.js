/*
문제 텍스트를 띄우고 타이머를 작동시킨다.
타이머가 다하면 알러트로 실패를 띄우고,
시간 안에 정답을 맞추면 타이머는 작동을 멈추고 알러트로 성공을 띄운다.
*/
import { useEffect, useState } from "react";

 

export const Timer=()=>{
    const [count, setCount] = useState(10);
    const [name, setName] = useState("");
    const [answer, setAnswer] = useState(false);

    useEffect(() => {
        const timer = setInterval(()=>{
            setCount(cnt => cnt-1);
        }, 1000);
        if(count===0){
            clearInterval(timer);
            alert("시간 초과 실패!!!")
        }else if(answer===true){
            alert("성공!! 고마워요~")
            clearInterval(timer);
        }
        
        return() => clearInterval(timer);
    }, [answer,count])
    
    

    const textChange = e => {setName(e.target.value)};
    const textSend = () => {
        if(name==="서현준"){
            setAnswer(true);
        }
        
    };




    return(
        <>
        <h1>맨 앞자리 통로 쪽에 앉은 머리 긴 아저씨의 이름은 무엇인가요?!!</h1>
        <input type="text" placeholder="서현준" onChange={textChange} value={name}/>
        <button onClick={textSend}>제출</button>
        <p>시간제한: {count}초 남았습니다.</p>
        </>
    )
    
}



// export const Question = () => {

//     return(
//         <>
            

//         </>
//     )

// }