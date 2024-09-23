import React from 'react';
const {useState} = React;


const Todolists = () => {
  const [todolists, setTodolists] = useState([
    {id:1,name:"안녕"},
    {id:2,name:"안녕2"}
  ]);
  const [inputId, setInputId] = useState(3);
  const [inputText, setInputText] = useState();

  const onChangeHandler = e => {setInputText(e.target.value)};
  const onClickHandler = () => {
    const newList = todolists.concat({
      id:inputId,
      name:inputText
    });
    setTodolists(newList);
    setInputId(inputId+1);
    setInputText("");
  }
  
  const listDelete =(id)=>{
    const doneLists = todolists.filter(doneList=>doneList.id!==id)
    setTodolists(doneLists);
  }

  const[textColor, setTextColor] = useState(""); // 입력받은 색
  const[textColor2, setTextColor2] = useState(""); // 실제로 바뀔 글자색

  const onChangeColorHandler = e => {setTextColor(e.target.value)};
  const onClickColorHandler = () => {
    setTextColor2(textColor)
    setTextColor("")}



  const [check, setCheck] = useState(false);
  // 현준쓰
  // const lineThrough ={
  //   "text-decoration" : check? "line-through" : "none"
  // }
  // const checkBox =(e)=>{setCheck(!check)};

  // 정민님
  const checkBox = (e)=>{
    const label = e.target.nextElementSibling;
    label.style.textDecoration = check? "none" : "line-through";
    setCheck(!check);
  };
  

  // todoList.map((current,index)=>{
  //   return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList} color={color}/>
  //   })

  


  const test = todolists.map(list =>{

    // 정민님
    return(
      <div style={{color:textColor2}}>
        <input type="checkbox" onChange={checkBox}/>
        <label key={list.id}>{list.name}</label>
        <button onClick={()=>listDelete(list.id)}>삭제</button> {/*매개변수가 있으면 ()=>를 사용해야 한다. 클릭 됐을 때 사용되도록..*/}
        <br/>
      </div>
      );
    }
    // 현준쓰
    // return(
    //   <div style={{color:textColor2}}>
    //     <input type="checkbox" onChange={checkBox} checked={check}/>
    //     <label key={list.id} style={{lineThrough}}>{list.name}</label>
    //     <button onClick={()=>listDelete(list.id)}>삭제</button> {/*매개변수가 있으면 ()=>를 사용해야 한다. 클릭 됐을 때 사용되도록..*/}
    //     <br/>
    //   </div>
    //   );
    // }
  )


  
  return(
    <>
    <h1>todolist</h1>
    <button>다크모드</button>
    <br/>
    
    {test}
    
    <input type="text" value={inputText} onChange={onChangeHandler}/>
    <button onClick={onClickHandler}>추가</button>
    <input type="text" value={textColor} onChange={onChangeColorHandler}/>
    <button onClick={onClickColorHandler}>글자색 변경</button>
    </>
  );
}



function App() {
  return (
    <>
    <Todolists/>
    </>
  );
}
export default App;