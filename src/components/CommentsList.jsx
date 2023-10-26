
import { Container, ListGroup, Row } from "react-bootstrap";
import SingleComment from "./SingleComment";


const CommentsList = (props) => {
   
        return(
            <Container>
                <Row>
                    <h2>Recensioni</h2>
                    <ListGroup>
                        {
                            props.comments.map(comm => 
                                <SingleComment key={comm._id} comment = {comm}/>
                            )
                        }     
                    </ListGroup>
                </Row>
            </Container>
        )
    }


export default CommentsList