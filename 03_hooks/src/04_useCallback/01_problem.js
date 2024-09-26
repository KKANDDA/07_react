import { useEffect, useState } from "react"


export const CallBackProblem = () => {

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const printNumber = () => {
        console.log(`current number: ${number}`);
    }

    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨")
    },[printNumber]); // 토글을 눌러도 useEffect가 작동한다. 왜? 렌더가 일어나면서 함수 객챠!~@~!@!#@~가 재할당이 되었기 때문
    // 부모 컴포넌트에서 자식으로 함수를 뿌려줬을 때, 부모 컴포넌트에서 함수가 재할당되면 자식들도 모두 재할당 된다. 이럴 때 사용한다.


    return(
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>

            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    )
}