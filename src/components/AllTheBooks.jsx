
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import books from '../data/books/fantasy.json'
import { Component } from 'react'

class AllTheBooks  extends Component {
    render(){ 
    return(
        <Container fluid>
            <Row className='d-flex'>    
      
            {
                books.map((fantasy)=>{
                    return(    
                        <Col md={4} lg={3} key={fantasy.asin}> 
                <Card className='h-100'>
                    <Card.Img variant="top" src={fantasy.img} style={{height: '280px'}} />
                    <Card.Body>
                      <Card.Title>{fantasy.title}</Card.Title>
                      <Card.Text>
                        {fantasy.category}  
                      </Card.Text>
                      <Card.Text>
                        {fantasy.price}$
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body> 
                    </Card>
                    </Col>
                    )
                })
            }   
      </Row>
      </Container>
    )
}
}
export default AllTheBooks