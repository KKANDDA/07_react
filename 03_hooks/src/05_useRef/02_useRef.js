/*
    useRef를 사용하는 목적?

    1. 값 유지 - 렌더링 사이에 값을 유지할 수 있게 해 준다.. 리렌더링 시 초기화되지 않는다..
    2. 렌더링 방지 - 값이 병경되더라도 리렌더링을 일으키지 않는다. 성능 최적화
    3. 애니매이션, 타이머 등 특정 값이 변경되더라도 리렌더링을 원치 않을 때 저장 용도
    4. DOM 요소에 직접 접근하는 방법을 제공함. 특정 요소 포커스 등
*/
import { useRef, useState } from "react";

 

export const UseRefCounter =()=>{
    console.log("useRefCounter 렌더링 됨..");

    const [count, setCounter] = useState(0); // 랜더링을 일으키는 변수.

    let variable = 0; // 렌더링되면 초기화 된다. 기본 자료형은 렌더링을 일으키지 않는다.

    const countRef = useRef(0); // 랜더링되면 기존 값을 기억하고 있다가 보내준다.


    const increseCount =()=>{
        setCounter(count+1);
    }

    const increseVariable =()=>{
        variable +=1;
        console.log("variable: "+variable);
    }

    const increseCountRef =()=>{
        countRef.current = countRef.current+1;
        console.log("카운트Ref: "+ countRef.current);
    }

    return(

        <>
            <h1>counter: {count}</h1>
            <h1>variable: {variable}</h1>
            <h1>countRef: {countRef.current}</h1>

            <button onClick={increseCount}>카운트 증가</button>
            <button onClick={increseVariable}>variable 카운트 증가</button>
            <button onClick={increseCountRef}>카운트 Ref 증가</button>
        </>

    )
}