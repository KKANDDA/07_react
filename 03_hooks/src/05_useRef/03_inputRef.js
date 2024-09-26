import { useEffect, useRef, useState } from "react"

export const LoginComponent =()=>{

    const [form,setForm] = useState({
        username:"",
        password: ""
    });

    useEffect(()=>{
        console.log(userNameRef.current);
        userNameRef.current.focus();
    }, [])

    const userNameRef = useRef();

    const onChangeHandler =(e)=>{
        setForm(
            {
                ...form, [e.target.name] : e.target.value
            }
        );
    }

    const onClickHandler = ()=>{
        alert(`username: ${form.username}\n password: ${form.password}`)
        setForm(
            {
                username:"",
                password:""
            }
        )
    }

    return(
        <>
            <input type="text" name="username"
            placeholder="이름 쓰봐~" onChange={onChangeHandler}
            value={form.username} />

            <br/>

            <input type="password" name="password"
            placeholder="비번 좀 쓰봐~" onChange={onChangeHandler}
            value={form.password} ref={userNameRef}/>

            <br/>
            <button onClick={onClickHandler}>로그인</button>
        </>
    )
}