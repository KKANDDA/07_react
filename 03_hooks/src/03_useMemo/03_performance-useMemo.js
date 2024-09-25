/*
    메모이제이션(memoization)
    - 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때
    이전에 계산한 값을 메모리에 저장함으로써
    동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술..

    useMemo
    - 특정 값이 변경될 때만 메모이제이션된 값을 재계산하여 성능 개선
    useMemo의 두 번째 인자로 전달된 값이 변경될 때만 연산 수행..
*/
import { useMemo, useState } from "react";

 

const hardCalculator = (num) => {
    console.log("어려운 계산기");
    for(let i=0; i<999999999; i++){}
    return num+1000;
}

const easyCalculator=(num)=>{
    console.log("쉬운 계산기");
    return num+1
}

export const UseMemoComponent =()=>{
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = useMemo(()=>{ // 최적화, 성능개선을 위해 쓰는 녀석
        return hardCalculator(hardNumber);
    }, [hardNumber]); // useEffect는 특정 state에 변화가 있을 때마다 렌더링이 추가로 일어나고, useMemo는 특정 state에 변화가 있어야만 렌더링이 일어난다.

    const easySum = easyCalculator(easyNumber);

    return( // 하나의 컴포넌트에 넣어두면 다른 쪽이 바뀌어도 모두가 렌더링이 다시 일어난다.
        <>
            <h1>어려운 계산기</h1>
            <input type="number" value={hardNumber} onChange={e=>setHardNumber(parseInt(e.target.value))}/>
            <span>+10000 = {hardSum}</span>
            <h1>쉬운 계산기</h1>
            <input type="number" value={easyNumber} onChange={e=>setEasyNumber(parseInt(e.target.value))}/>
            <span>+1 = {easySum}</span>
        </>
    )
}