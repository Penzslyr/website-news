import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndonesiaNews = () => {
    const getting = ' https://newsapi.org/v2/top-headlines?country=id&apiKey=d2f16d99bae54501b545e55d9726d6e4'
    const [data, setData] = useState(null)
    const [query, setQuery] = useState("")


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
        <input type="text" placeholder="Search..." className="search" onChange={e=>setQuery(e.target.value)}/>
        <hr/>
        <Container>
        <Row>
        { data !== null && data.map((res)=>{
            return (
                <Col key={res.title}>
                 
                 <Card style={{ width: '18rem', height:'fit-content', margin:'auto'}} className="border-0">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{res.source.name}</Card.Subtitle>
                    <Card.Title>{res.title }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{res.author}</Card.Subtitle>
                    <Card.Text>
                    {res.description}
                    </Card.Text>
                    {/* <Button variant="primary"><a href= target="_blank" rel="noopener noreferrer"></a></Button> */}
                    <Button href={res.url} target="_blank">News Page</Button>
                    
                </Card.Body>
                </Card>
                
                </Col>
            )
        })}
        </Row>
        </Container>
        </>
    )
}

export default IndonesiaNews