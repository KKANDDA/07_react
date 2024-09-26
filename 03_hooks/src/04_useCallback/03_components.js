import { useCallback, useEffect, useState } from "react"

export const CallbackComponent =()=>{
    const [size, setSize] =useState(200);
    const [isDark, setIsDark] = useState(false);

    const genSquareStyle = useCallback(()=>{
        return{
            backgroundColor: "orangered",
            width: size,
            height: size
        }
    },[size]);

    return(
        <>
            <div style={{backgroundColor:isDark? "black":"white"}}>

                <input type="range" min="100" max="300"
                onChange={e=>setSize(parseInt(e.target.value))}/>

                <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
                <Square genSquareStyle={genSquareStyle}/>

            </div>
        </>
    )
}

const Square =({genSquareStyle})=>{
    const [style, setStyle] = useState({});

    // 토글(배경색)을 눌렀을 땐 useEffect가 작동하는 것은 개발자의 예상 영역이 아니다.
    // useCallback으로 부모 함수를 감쌌더니 렌더링이 일어나도 함수 재할당이 일어나지 않게 되었다.
    useEffect(()=>{
        console.log("style 변경");
        setStyle(genSquareStyle());

    }, [genSquareStyle]);

    return <div style={style}></div>
}