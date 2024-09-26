import { useEffect, useState } from "react";


export const ProductList=()=>{
    const [all, setAll] = useState([]);
    const [filter, setFilter] = useState([]);

    const products = [
        { name: "아이폰 16", category: "전자제품" },
        { name: "맥북 프로", category: "전자제품" },
        { name: "에어팟", category: "전자제품" },
        { name: "삼성 갤럭시", category: "전자제품" },
        { name: "나이키 운동화", category: "의류" },
        { name: "아디다스 티셔츠", category: "의류" },
        { name: "믹서기", category: "가전제품" },
        { name: "전자레인지", category: "가전제품" }
    ];

    useEffect(() => {
        setAll(products);
    }, []);

    const onClickAll=()=>{
        setFilter(all)
    };
    const onClickElectronics=()=>{
        // all 배열 안의 category가 "전자제품"인 것들을 setFilter안에 넣어준다. 
        // 그리고 밑에서 filter로 뿌려준다.
        setFilter(all.filter(product => product.category === "전자제품"));
    };
    const onClickClothes=()=>{
        setFilter(all.filter(product => product.category === "의류"));
    };
    const onClickAppliances=()=>{
        setFilter(all.filter(product => product.category === "가전제품"));
    };


    return(
        <>
            <h1>상품 목록</h1>
            <button onClick={()=>onClickAll}>모든 카테고리</button>
            <button onClick={()=>onClickElectronics}>전자제품</button>
            <button onClick={()=>onClickClothes}>의류</button>
            <button onClick={()=>onClickAppliances}>가전제품</button>
            <br/>
            <h3>총 {filter.length}개의 상품</h3>
            <br/>
            <ul>
                {filter.map((product, index) => (
                    <li key={index}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

