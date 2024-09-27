/*
    게시판 만들기..

    인풋과 텍스트 에어리어를 이용하여 제목과 내용을 받고
    버튼을 이용하여 제목과 내용을 합쳐 게시글로 올린다.
    <textarea/>
    

    게시된 글은 사용자가 인풋으로 입력한 글과 대조하여 검색할 수 있다.
    (includes 함수)

    게시된 글은 버튼을 이용해 삭제할 수도 있다.
    (filter 함수)
*/

import { useState } from "react"

const Gesigul =({gul, index, posts, setPosts})=>{
    const [gumsak, setGumsak]= useState('');

        // //
        // const removeTodo=()=>{
        //     const result = todoList.filter(item =>item !== todo);
        //     setTodoList(result);
        // }
        // //

        const onClickHandlerDelete=()=>{
            const deletedResults = posts.filter(item => item.title !== gul.title)
            setPosts(deletedResults)
        }

    return(
        <>
            <li key={index}>{gul.title}</li>
            <p key={index}>{gul.contents}</p>
            <button onClick={onClickHandlerDelete}>게시글 삭제</button>
            <br/>
            <input type="text" name="search" onClick={onClickHandlerSearch}/>
        </>
    )
    
}

const Gesipan =()=>{
    const [gesigul, setGesigul] = useState(
        {
            title:'',
            contents:''
        }
    );

    const [posts, setPosts] = useState([]);

    const onChangeHandlerTilte =(e)=>{setGesigul({...gesigul, [e.target.name] : e.target.value})};
    // {} 객체 안에서의 ...연산자, 객체 안의 요소들을 펼쳤다.
    const onChangeHandlerContents=(e)=>{setGesigul({...gesigul, [e.target.name] : e.target.value})};

    const onClickHandlerPost =()=>{
        setPosts([...posts,gesigul])
        // [] 배열 안에서의 ...연산자, 기존에 있던 배열과 추가하고자 하는 배열을 더해서 set에 넣었다.
        // 그렇지 않으면 기존 배열은 삭제된다.
        setGesigul(
            {
                title:"",
                contents:""
            }
        )
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
                    <Gesigul gul={gul} index={index} posts={posts} setPosts={setPosts}/>
                        {/*
                            <li key={index}>{gul.title}</li>
                            <p key={index}>{gul.contents}</p>
                            <button onClick={onClickHandlerDelete}>게시글 삭제</button>
                        */}
                    </>
                ))}
            </ul>

        </>
        
    )
}
export default Gesipan;