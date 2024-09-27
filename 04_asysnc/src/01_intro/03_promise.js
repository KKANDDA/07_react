/*
    promise는 콜백 지옥과 같은 코드가 형성되지 않게 (비동기 통신간의 순서를 정하기 쉽게)
    하는 방안으로 ES6에서 도입되었다..

    promise 객체 생성 이유?
    1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하다..
    2. promise 객체가 제공하는 메소드를 사용하기 위함
        (콜백 지옥 상황을 해소해 주기 때문.. 가독성이 좋고, 메소드 체이닝 방식 제공)
*/

const increase =(number)=>{
    const promise = new Promise((resolve, reject)=>{ // 성공하면 리졸브, 실패하면 리젝트
        setTimeout(()=>{
            const result = number+10;
            if(result>50){
                        const e = new Error("NumberToBig");
                        return reject(e);
                    }
                    /*return 생략가능*/ resolve(result);
        }, 1000)
    })
    return promise;

}


/*
값을 뱉는 것이 아닌, 값이 담긴 약속을 뱉는다. 값을 받는 방법은 두 가지가 있다.
Promise 객체로 해 놓으면, 비동기 함수로써 결과를 바로 뱉지 않고, 결과 값을 주겠다는 약속만 한다.
(아직 연산이 안 끝났을 수도 있으니..) 그래서 그냥 부르면 약속만 뱉는 것이고, .then을 이용해 Promise가 약속한 값을 받아 낸다.
*/
console.log(increase(0)); // 값이 아닌 약속을 뱉었다.

// 체이닝
// promise 객체는 then 메소드를 사용하여 비동기 작업의 결과를 처리할 수 있다..
increase(30).then(number=>{ // increase(30)을 정상적으로 실행하고 나온 값을 number가 인자로 받아왔다.
    console.log(number);
    return increase(number);
}).then(number=>{ // 이어서 체인으로 수행된 값을 인자로 받았다
    console.log(number);
    return increase(number);
}).catch(e=>console.log(e, "가 발생했네"));
        