import { Component } from "react";
import { Container, ListGroupItem, Row } from "react-bootstrap";


class SingleComment extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <ListGroupItem>
                        <p>Testo: {this.props.comment.comment}</p>
                        <p>Voto: {this.props.comment.rate}</p>
                    </ListGroupItem>
                </Row>
            </Container>
        )
    }
}
export default SingleComment