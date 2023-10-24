
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import books from '../data/books/fantasy.json'
import { Component } from 'react'

class AllTheBooks  extends Component {
    render(){ 
    return(
        <Container fluid>
            <Row className='d-flex'>
                <Col md={4} lg={3}>
      
            {
                books.map((fantasy)=>{
                    return(     
                <Card key={fantasy.asin}>
                    <Card.Img variant="top" src={fantasy.img} />
                    <Card.Body>
                      <Card.Title>{fantasy.title}</Card.Title>
                      <Card.Text>
                       <p>{fantasy.category}</p>
                       <p>{fantasy.price}$</p>
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body> 
                    </Card>
                    )
                })
            }
    
     
      </Col>
      </Row>
      </Container>
    )
}
}
export default AllTheBooks