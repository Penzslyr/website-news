import axios from "axios"
import { useEffect, useState } from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IndonesiaCard from "./IndonesiaCard";


const IndonesiaNews = () => {
    const getting = ' https://newsapi.org/v2/top-headlines?country=id&apiKey=d2f16d99bae54501b545e55d9726d6e4'
    const [data, setData] = useState(null)
    

    useEffect(()=> {
        axios.get(getting)
        .then((res)=>{
            // console.log(res.data.articles)
           
            setData([...res.data.articles])
        })
        .catch((err)=>{

        });
    },[])
    // console.log(data)
    

    return(
        <>
        <h1 className="text-center"> Indonesia News </h1>
       
        <hr/>
        <Container>
        <Row>
        { data !== null && data.map((res)=>{
            return (
                <IndonesiaCard key={res.title} res={res}/>
            )
        })}
        </Row>
        </Container>
        </>
    )
}

export default IndonesiaNews