/*
    게시판 만들기..

    인풋과 텍스트 에어리어를 이용하여 제목과 내용을 받고
    버튼을 이용하여 제목과 내용을 합쳐 게시글로 올린다.
    <textarea/>

    게시된 글들은 사용자가 인풋으로 입력한 글과 대조하여 검색할 수 있다.
    (includes 함수)
*/

import { useState } from "react"

const Gesipan =()=>{
    const [gesigul, setGesigul] = useState(
        {
            title:'',
            contents:''
        }
    );

    const [posts, setPosts] = useState([]);

    const onChangeHandlerTilte =(e)=>{setGesigul({...gesigul, [e.target.name] : e.target.value})};
    // {}객체 안에서의 ...연산자, 객체 안의 요소들을 펼쳤다.
    const onChangeHandlerContents=(e)=>{setGesigul({...gesigul, [e.target.name] : e.target.value})};

    const onClickHandlerPost =()=>{
        setPosts([...posts,gesigul])
        // []배열 안에서의 ...연산자, 기존에 있던 배열과 추가하고자 하는 배열을 더해서 set에 넣었다.
        // 그렇지 않으면 기존 배열은 삭제된다.
    };
    return(
        <>
            <h1>게시판</h1>

            <input type="text" name="title" placeholder="제목"
                value={gesigul.title}
                onChange={onChangeHandlerTilte}/>

            <br/>
            <br/>

            <textarea type="text" name="contents" placeholder="내용"
                value={gesigul.contents}
                onChange={onChangeHandlerContents}/>

            <br/>

            <button onClick={onClickHandlerPost}>게시</button>
            
            <br/>
            <br/>

            <ul>
                {posts.map((gul, index)=>(
                    <>
                    <li key={index}>{gul.title}</li>
                    <p key={index}>{gul.contents}</p>
                    </>
                ))}
            </ul>

        </>
        
    )
}
export default Gesipan;