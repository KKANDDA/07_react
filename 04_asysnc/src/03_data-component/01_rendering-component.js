import { useEffect, useState } from "react"



const Item =({user})=>{
    const styles = {
        background:'powderblue',
        border:'1px dotted black',
        width:'350px',
        display:'inline-block',
        margin:'10px'
      }

      return(
        <>
            <div style={styles}>
                <h4>{user.name}</h4>
                <p>
                    id: {user.id}<br/>
                    email: {user.email}<br/>
                    phone: {user.phone}<br/>
                </p>
            </div>
        </>
      )
}

const ItemList =()=>{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []) // 렌더링 이후 즉 틀이 만들어진 이후에 데이터를 가져오기 위해 useEffect를 사용했다.
    // 또 useEffect를 씌우지 않고 사용하면 유로 api같은 경우, 렌더가 되면 계속 실행되기 때문에.. ㅠㅠ

    return (
        <div>
            {users.map(user=><Item user={user}/>)}
        </div>
    )
}

const Title =()=>{
    return <h1>회원 목록</h1>
}

const Container =()=>{

    return(
        <>
            <Title/>
            <ItemList/>
        </>
    )
}
export default Container;