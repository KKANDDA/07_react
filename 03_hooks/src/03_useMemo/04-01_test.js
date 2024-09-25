import { useMemo, useState } from "react"


const InputText =({setNumbers})=>{
    const onChangeInputText=(e)=>{setNumbers(e.target.value)};

    return(
        <>
            <input type="text" onChange={onChangeInputText}/>
        </>
    );
}

const Calculator=({sqareNumbers})=>{
    
    return(
        <>
            <ul>
                {sqareNumbers.map((nowNum)=>{
                    return <li>{nowNum}</li>
                })}
            </ul>
        </>
    );

}

export const Question =()=>{
    const [numbers, setNumbers] = useState("");

    const sqareNumbers = useMemo(()=>{
        console.log("제곱값 계산 실행");
        return numbers.split(",").map(num=>{
            return isNaN(num)? 0 : num ** 2;
        })
    }, [numbers]);

    return(
        <>
            <h1>숫자 제곱 계산기</h1>
            <InputText setNumbers={setNumbers}/>
            <h2>제곱값: </h2>
            <Calculator sqareNumbers={sqareNumbers}/>
            
        </>
    );
}