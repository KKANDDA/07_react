/*
context는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록 고안된 방법이다..
트리 구조가 복잡해질 수록 하위 컴포넌트로 props를 전달하는 양이 많아지고,
그러면 유지보수와 코드 가독성에 악영향을 준다..

하지만 context를 사용하면 중간 컴포넌트 들에게 props를 넘겨주지 않아도 되고
유지보수도 수월해지게 된다..
단, context를 사용하면 컴포넌트를 재사용하기 어려워지기 때문에
꼭 필료할 때 써야한다. 따라서 상황에 맞춰 사용해야 한다.
(context보다 props가 더 간단한 해결책이 될 수 있다..)
*/

import { createContext, useContext, useState } from "react";
import { Styles } from "./style";

// 컨텍스트 생성 --> 별도의 저장소를 만듦..
const DarkModeContext = createContext(null);

const Header =()=>{
    const context = useContext(DarkModeContext);

    const {isDark} = context;

    return(
        <header
            style={
                {
                    ...Styles.header,
                    backgroundColor: isDark? "black":"lightgray",
                    color: isDark? "white":"black"
                }
            }
        >
            <h1>아냐세여~!~!~!~! useContext</h1>
        </header>

    )
}

const Content=()=>{
    const context = useContext(DarkModeContext);

    const {isDark} = context;

    return(
        <div style={
            {
                ...Styles.content,
                backgroundColor: isDark? "gray":"white",
                color: isDark? "white":"black"
            }
        }
        
        >
            <p>내용이여~~!</p>
        </div>
    )
}

const Footer=()=>{
    const context = useContext(DarkModeContext); // 상태관리는 useState가 한다.

    const {isDark, setIsDark} = context;

    const toffleHandler =()=>{setIsDark(!isDark)};

    return(
        <footer
            style={
                {
                    ...Styles.footer,
                    backgroundColor: isDark? "black":"lightgray",
                    color: isDark? "white":"black"
                }
            }
        >
            <button onClick={toffleHandler}>
                {isDark? "black":"white"}
            </button>
            useContext App
        </footer>
    )
}

const Page=()=>{
    
    return(
        <div style={
            {
                ...Styles.page
            }
        }>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

const ContextContainer =()=>{
    const [isDark, setIsDark] = useState(false);

    return( 
        <DarkModeContext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </DarkModeContext.Provider>
    ) // 다크모드 컨텍스트의 자식들(페이지<헤더,내용,발>)이 밸류에 담긴 요소에 접근할 수 있게 됐다.
}
export default ContextContainer;

/*
    useContext의 단점..

    1. 성능 저하:
        context는 전역 상태를 공유하기 때문에
        공유된 상태가 변경되면 그 상태를 구독하는 모든 컴포넌트가 리렌더링된다..
        만약 context를 많이 사용하고 그 상태들이 자주 변경되면,
        불필요한 렌더링이 발생하여 성능이 저하될 수 있다..

    2. 컴포넌트 재사용성 감소:
        Context에 의존하는 컴포넌트가 많아질 수록,
        해당 컴포넌트는 그 Context 환경 안에서만 동작할 수 있다.
        이런 컴포넌트는 독립적으로 재사용하기 어려워지며, 다른 부분에서 쓰기 어렵다.

    3. 구조적인 복잡성 증가:
        Context를 많이 사용하면 프로젝트 구조가 복잡해진다..
        여러 Context가 중첩되면 코드의 가독성이 떨어지고 유지보수에 악영향을 끼친다.
        많은 컴포넌트가 여러 Context에 의존하면, 프로젝트의 복잡도가 급격히 증가한다..
*/