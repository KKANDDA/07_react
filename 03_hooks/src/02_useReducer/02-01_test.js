import { useReducer } from "react"

const reducer = (state, action) => { // dispatch 의 매개변수가 action으로 넘어갔다. type랑 e.target

    switch(action.type){
        case "PLUS": return{count:state.count+1}
        case "MINUS": return{count:state.count-1}
        case "text":
            return({
            ...state,
            [action.name] : action.value        
    });
        default: return state;
    }
    

    
}




export const CountCheck =()=>{
    const [state, dispatch] = useReducer(reducer,{count:0});

    return(
        <>
            <h1>Counter: {state.count}</h1>
            <button onClick={()=>dispatch({type:"PLUS"})}>+1</button> {/*디스패치 뒤에*/}
            <button onClick={()=>dispatch({type:"MINUS"})}>-1</button>
        </>
    )

}




export const InputText =()=>{
    const [state, dispatch] = useReducer(reducer, {
        anyText: ''  
    });

    const onChangeHandler = e => dispatch(e.target)

    return(
        <>
            <input type="text" name="anyText" onChange={onChangeHandler}/>
            <p>입력한 텍스트: {state.anyText}</p>
            
        </>
    )
}