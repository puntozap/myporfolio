import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../section1/section1.css';
import logo from '../images/47923552.jpg';

import {
    Container,
    Row,
    Col
} from 'reactstrap';
class Section1 extends React.Component {
    render() {
        return (
            <section className="section1 pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8} className="text-center"><img className="rounded-circle border-white" src={logo} width={200} />
                            <h2 className="text-uppercase text-white">Jose Zapata</h2>
                            <p className="text-uppercase text-white">Web Designer Developer  </p>
                            <p className="text-white text-uppercase"><a className="text-white" href="https://www.instagram.com/puntozap/" target="_blank"><i className="fab fa-instagram"></i> puntozap</a> | <i class="fab fa-whatsapp"></i> +58 426 7292629 | <i class="fas fa-envelope-square"></i> puntozap@gmail.com</p>
                            
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
export default Section1;