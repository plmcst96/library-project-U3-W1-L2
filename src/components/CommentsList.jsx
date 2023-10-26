import { Component } from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import SingleComment from "./SingleComment";


class CommentsList extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <h2>Recensioni</h2>
                    <ListGroup>
                        {
                            this.props.comments.map(comm => 
                                <SingleComment key={comm._id} comment = {comm}/>
                            )
                        }     
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}

export default CommentsList