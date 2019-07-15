import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'reactstrap';
class Tab2 extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="12" className="pt-5" >
                    <p className="h4 text-justify">Profile</p>
                    <p className="text-justify text-monospace">
                        I have been programming for 10 years in professional academic mode and 3 years experience in small and big companies around the world, with a company named VILLARTECHNOLOGIES.</p>
                    <p className="text-justify text-monospace">During that time, I developed in Backend, however, I 💓 frontend, because, there is nothing like a tech perfect product from the visual point of view, Therefore, I consider an integral person, because I like as the backend as the frontend.  There is nothing like the  creative or simples  desing ideas in any web project</p>
                    <hr/>
                    <p className="h4 text-justify">Academic information</p>
                    <p className=" text-monospace text-justify h4">
                        Universidad Nacional Experimental del Tachira
                        <br/>2005 - Present
                    </p>
                    <p className=" text-monospace text-justify ">
                        Informatic Enginner
                    </p>
                </Col>
            </Row>
        );
    }
}
export default Tab2;