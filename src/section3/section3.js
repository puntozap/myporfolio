import React from 'react';
import '../section3/section3.css';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
class Section3 extends React.Component {
    render() {
        return (
            <section className="section3 pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p className="text-uppercase text-white">since 3 yeas ago making tools for people with technologies</p>
                        </Col>
                        <Col lg={12}>
                            <p className="text-white h1">
                                <i className="fab fa-js"></i>
                                <i className="fab fa-laravel"></i>
                                <i className="fab fa-react"></i>
                                <i className="fab fa-html5"></i>
                                <i className="fab fa-css3-alt"></i>
                                <i className="fab fa-bootstrap"></i>
                            </p>
                            <p className="text-white">... And Others</p>
                            <p className="text-white">I prefer develop frontend</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
export default Section3;