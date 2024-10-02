import {useState, useEffect} from "react";



const NewsAPI =()=>{

    const API_KEY = `45ea446d3f584ae8adc99bd4f011b2bb`;

    const [newsList,setNewsList] = useState([]);

    const getNewsList =()=>{
        return(
            fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(result => result.json())
            .then(news=>{
                console.log(news);
                setNewsList(news.articles)})
        )
    };

    useEffect(()=>
        {
            async function use(){
                console.log("test")
                await getNewsList();
            }
            use();
        }, []

    );

    

    return(
        <>
            {newsList.map(news=>{
                return(
                <>
                    <img src={news.urlToImage}/>
                    <br/>
                    <title>{news.title}</title>
                    <br/>
                    <contents>{news.description}</contents>
                    <br/>
                    <a href={news.url}>
                        <button>기사 내용 자세히 보기</button>
                    </a>
                    <br/>

                    
                </>
                )
            
            })}
            
        </>
    )
}
export default NewsAPI;