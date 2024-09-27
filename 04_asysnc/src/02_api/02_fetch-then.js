const ApiComponent =()=>{
    const callApi =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(reponse =>{
            console.log(reponse);
            return reponse.json(); // 제이슨에는 본문만 담겨있다.
        })
        .then(data=>{
            console.log(data);
        })
        .catch(error=>{
            console.log("API 호출 중 오류 발생", error);
        })
    }
    return(
        <>
            <button onClick={callApi}>api 호출</button>
        </>
    )
}
export default ApiComponent;