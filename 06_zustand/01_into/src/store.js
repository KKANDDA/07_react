import {create} from "zustand";



const useStore = create((set)=>({ // set은 함수, 이름은 바꿀 수 있다. 기능은 제공해 주는 것을 받았을 뿐..
    count:0, // 상태로 사용할 값



    increment: ()=>set((state)=>({count: state.count+1})), // state는 현재 내부의 상태

    decrement: ()=> set((state)=>({count:state.count-1})), // ...스프레드를 쓰지 않아도 부분 상태 업데이트를 지원해 준다.

    reset: ()=>set({count:0})
}))
export default useStore;