// state의 변경사항은 기억은 하되 렌더는 하지 않는 녀석
// 사용자에게 보여줄 값이 아닌 개발자가 사용하는 값이라면.. 렌더링이 필요없겠지..

import { useState } from "react"


export const CounterRef =()=>{
    const [counter, setCounter] = useState(0);

    console.log("counter 렌더링 됨..");

    const increseCount=()=>{
        setCounter(counter+1);
    }

    return(

        <>
            <h1>Counter: {counter}</h1>
            <button onClick={increseCount}>카운트 증가</button>
        </>

    )
}