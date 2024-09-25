import { useEffect, useState } from "react"


const UseEffectUpdate = () =>{
    const [user, setUser] = useState({username:'', password:''});
    const onChangeHandler = e => {
        setUser({
            ...user, // 스프레드 연산자, 기존의 객체를 그대로 복사
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        console.log("username 변경 감지!~!~!~~!!~!~!~");
    }, [user.username]);

    useEffect(()=>{
        console.log("password 변경 감지~!~!@~!~!~~!");
    }, [user.password]);

    return(
        <>
            <label>userName: </label>
            <input type="text" name="username" onChange={onChangeHandler}/>
            <br/>
            <label>password: </label>
            <input type="password" name="password" onChange={onChangeHandler}/>
            <h3>username : {user.username}</h3>
            <h3>password : {user.password}</h3>
        </>
    )
}
export default UseEffectUpdate;