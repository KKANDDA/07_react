import { useState } from "react"

const useInput =()=>{
    const [value,setValue]=useState("");

    const onChange =e=>setValue(e.target.value);

    return {value,onChange};
}

const CustomHooks =()=>{
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return(
        <>
            <label>이름: </label>
            <input type="text" value={name.value} onChange={name.onChange}/>
            <br/>
            <label>비번: </label>
            <input type="password" {...pass}/> {/*속성과 키값이 값을 때만 사용할 수 있다..*/}
            <br/>
            <label>이름: </label>
            <input type="email" {...email}/>
            <h4>name: {name.value}</h4>
            <h4>pass: {pass.value}</h4>
            <h4>email: {email.value}</h4>
            
        </>
    )
}