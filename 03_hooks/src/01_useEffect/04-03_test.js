/*
프로필 입력
라벨 이름
인풋
라벨 별명
인풋
버튼 저장

프로필 미리보기
이름:
별명:
*/

import { useEffect, useState } from "react"

const ProfilePrint=({profile2})=>{
    
    return(
        <>
        <h1>프로필 미리보기</h1>
        <p>이름: {profile2.name}</p>
        <p>별명: {profile2.nickName}</p>
        </>
       
    )
}

export const ProfileInput=()=>{
    const [profile, setProfile] =useState(
        [
            {name : "서현준"},
            {nickName : "KKANDDA"}
        ]
    );

    const [profile2, setProfile2]=useState(
        [
            {name : ""},
            {nickName : ""}
        ]
    );

    const onChangeInput=(e)=>{
        setProfile({...profile,
            [e.target.name] : e.target.value
        })
        
    };

    const onClickInput=()=>{setProfile2(profile)};

    useEffect(()=>{
        console.log("이름 또는 별명이 변경됐습니다");
    }, [profile])

    return(
        <>
        <h1>프로필 입력 및 수정</h1>
        <label>이름: </label>
        <input type="text" name="name" value={profile.name} onChange={onChangeInput}/>
        <br/>
        <label>별명: </label>
        <input type="text" name="nickName" value={profile.nickName} onChange={onChangeInput}/>
        <br/>
        <button onClick={onClickInput}>저장</button>
        <br/>
        <br/>
        <ProfilePrint profile2={profile2}/>
        </>
    )
}
