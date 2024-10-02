


import {create} from "zustand";

const userAouthStore = create((set)=>({

    isLogin: false, // 로그인 상태
    userName: "", // 현재 로그인한 사용자의 이름

    login: (userName)=> set({isLogin: true, userName}), // 보통은 백앤드에서 받아 올 것이다..
    logout: (userName)=> set({isLogin: false, userName})
}))
export default userAouthStore;