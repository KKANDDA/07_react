import {useState} from "react"


const SearchBox = ({setImgUrl})=>{
    const [emojiName,setEmojiName] = useState("");

    const onChangeHandler = e => setEmojiName(e.target.value);
    const onClickHandler =()=>{
        fetch("https://api.github.com/emojis")
        .then(r=>r.json())
        .then(result => setImgUrl(result[emojiName])); // 대괄호 표기법 .emojiName 보통 이렇게 해 왔다.
    }

    return(
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
        </>
    )
}

const ImageBox =({imgUrl})=>{
    return !!imgUrl?<img src={imgUrl} alt="이모지"/>: <h1>텅텅</h1>;
    // !!으로 논리형으로 바꿨다. 빈문자열이기에 그냥은 쓸 수 없다.
}

const EmojiContainer =()=>{
    const [imgUrl, setImgUrl] =useState("");

    return(
        <>
        <SearchBox setImgUrl={setImgUrl}/>
        <br/>
        <ImageBox imgUrl={imgUrl}/>
        </>
    )
}
export default EmojiContainer;