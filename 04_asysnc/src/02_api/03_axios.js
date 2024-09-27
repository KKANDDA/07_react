import axios from "axios"; // npm install axios

const callApi =()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r=>r.json()).then(d=>console.log(d)); // 축약 표현
}

const axiosCall=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>console.log(res.data)); // 제이슨처리 해준다.. body에 있는 것들을..
}

/*
    Axios: 요청 처리에 대한 여러가지 기능을 제공해 준다..
    따라서 패키지 크기가 상대적으로 더 크고 무겁다..

    Fetch: 기본 브라우저 내장 API이다..
    가볍고 빠르다. 하지만 여러 처리를 수동으로 해 주어야 한다..
*/

const AxiosCallComponent=()=>{
    return(
        <>
            <button onClick={callApi}>fetch 요청</button>
            <button onClick={axiosCall}>axios 요청</button>
        </>
    )
}
export default AxiosCallComponent;