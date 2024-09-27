
/*
    Promise: 비동기 작업의 결과를 처리하는 객체
    async/await: 비동기 작업을 동기적으로 실행하는 것처럼 보이게 만드는 구문
    then()과 await: promise의 결과를 사용할 때
    then()을 사용하거나, async 함수 내에서 await로 처리할 수 있음..
*/

function increase(number){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result = number +10;
            if(result > 50){
                const e = new Error("number to big");
                return reject(e);
            }
            resolve(result);
        }, 1000);
    })
    return promise;
}

// 동기들은 지들끼리 순서대로 잘 지내고, 비동기들도 await로 순서를 지킨다. 비동기는 동기들의 흐름을 따르지 않는다.

// async: 비동기 함수를 정의
async function run() {
    try{
        let result = await increase(1); // await 가 없으면 약속을 가져온다. 
        console.log(result);
        // await로 비동기 객체간의 순서를 정해줬다. 이거 끝나고 다음 꺼!!
        result = await increase(2);
        console.log(result);
        result = await increase(3);
        console.log(result);
        result = await increase(4);
        console.log(result);
        result = await increase(5);
        console.log(result);
        result = await increase(45); // 체인은 아니다.
        console.log(result);
        return result;

    }catch(e){
        console.log(e, "가 발생함");
    }
    
}

const value = async ()=>{
    const runValue = await run();
    console.log("value: " + runValue);
}

const result = value();
console.log(result);