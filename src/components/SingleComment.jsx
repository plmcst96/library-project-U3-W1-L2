
import { Container, ListGroupItem, Row } from "react-bootstrap";


const SingleComment = (props) => {
    
        return(
            <Container>
                <Row>
                    <ListGroupItem>
                        <p>Testo: {props.comment.comment}</p>
                        <p>Voto: {props.comment.rate}</p>
                    </ListGroupItem>
                </Row>
            </Container>
        )
    
}
export default SingleComment