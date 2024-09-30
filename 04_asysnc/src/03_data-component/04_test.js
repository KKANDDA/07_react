/*
45ea446d3f584ae8adc99bd4f011b2bb
*/

import { useEffect, useState } from "react"

const Akuma2 =()=>{
    const [news, setNews] = useState([])
    

    const API_KEY = "45ea446d3f584ae8adc99bd4f011b2bb"

    const getNews =()=>{
        return(
            fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data.articles);
            setNews(data.articles)
        })
    )
    }

    useEffect(()=>{
        async function say(){
            const aaa = await getNews();
        }
        say();
    }, [])


    return(
        <>
            {news.map(news1 => {
               return (
                <>
                <p>{news1.title}</p>
                <img src={news1.urlToImage}/>
                </>
            )
            })}
        </>
    )
}
export default Akuma2;