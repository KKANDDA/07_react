import { useReducer } from "react"

const reducer =(state, action)=>{
    switch(action.type){
        case "PLUS": return{...state, count:state.count+1};
        case "MINUS": return{};
        case "TEXT": return{};
        default: return{};
    }
}

const Counter = (state, dispatch) => {
    return(
        <>
            <h1>Counter: {state.count}</h1>
            <button onClick={()=>dispatch({type:"PLUS"})}>+1</button>
            <button onClick={()=>dispatch({type:"MINUS"})}>-1</button>
        </>
    )
}

export const Question=()=>{
    const allState ={count:0, text:""};
    const [state, dispatch] = useReducer(reducer, allState);

    return(
        <>
        <Counter state={state} dispatch={dispatch}/>
        <Texter state={state} dispatch={dispatch}/>
        </>
    )
}