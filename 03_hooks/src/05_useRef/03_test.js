import { useState } from "react"

const Gesipan =()=>{
    const [gesigul, setgesigul] = useState(
        {
            title:'',
        }
    );

    

    return(
        <>
            <h1>게시판</h1>
            <input type="text" name="title" placeholder="제목"/>
        </>
        
    )
}