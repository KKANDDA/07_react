/*
Evil Insult Generator
https://evilinsult.com/api/#generate-insult-get

Example URI
https://evilinsult.com/generate_insult.php?lang=en&type=json

Body
{
  "number": "123",
  "language": "en",
  "insult": "You're a failed abortion whose birth certificate is an apology from the condom factory.",
  "created": "2018-10-24 06:52:02",
  "shown": "2688",
  "createdby": "someone",
  "active": "1",
  "comment": "Sourced from some website"
}

*/

import { useEffect, useState } from "react"

const Akuma =()=>{
    const [akdam, setAkdam] = useState("");

    const getEvil =()=>{
        return(
            fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
        ).then(response => response.json())
    }

    useEffect(()=>{
        async function say(){
            const aaa = await getEvil();

            setAkdam(aaa.insult)
        }
        say();
    }, [])


    return(
        <>
            <h2>{akdam}</h2>
        </>
    )
}
export default Akuma;