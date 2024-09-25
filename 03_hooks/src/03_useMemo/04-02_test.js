

export const ProductList=()=>{
    const products = [
        { name: "아이폰 16", category: "전자제품" },
        { name: "맥북 프로", category: "전자제품" },
        { name: "에어팟", category: "전자제품" },
        { name: "삼성 갤럭시", category: "전자제품" },
        { name: "나이키 운동화", category: "의류" },
        { name: "아디다스 티셔츠", category: "의류" },
        { name: "믹서기", category: "가전제품" },
        { name: "전자레인지", category: "가전제품" },
    ];

    return(
        <>
            <h1>상품 목록</h1>
            <button onClick={()=>onClickAll()}>모든 카테고리</button>
            <button onClick={()=>onClickElectronics()}>전자제품</button>
            <button onClick={()=>onClickClothes()}>의류</button>
            <button onClick={()=>onClickAppliances()}>가전제품</button>
            <br/>
            <h3>총 8개의 상품</h3>
            <br/>
            <ul>
                <li></li>
            </ul>
        </>
    )
}

