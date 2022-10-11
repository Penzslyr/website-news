import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const SearchPages = ({res, title}) => {
  return (
    <>
        <h1 className="text-center"> Searching News </h1>
       
        <hr/>
        <Container>
        <Row>
        { res !== null && res.map((res)=>{
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

export default SearchPages