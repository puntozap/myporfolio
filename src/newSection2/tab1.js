import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'reactstrap';

class Tab1 extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="12" className="pt-3 text-left">
                    <p className="h4 text-justify">Villartechnologies</p>
                    <p className="text-justify text-monospace h3">2015 - Present</p>
                    <p className="text-justify text-monospace "><em>Software Developer</em></p>
                    <p className="text-justify text-monospace em">Web Product Creation for other companies around the world like Spain, Paraguay, Argentina, Usa and Israel</p>
                    <hr/>
                    <p className="h4 text-justify">Fundacion Atletica San Cristobal</p>
                    <p className="text-justify text-monospace h3">2012 - 2015</p>
                    <p className="text-justify text-monospace "><em>Webmaster & Photographer</em></p>
                    <p className="text-justify text-monospace em">Website's Maintenance, content creation, photographer with a semiprofessional camera and a litle bit of digital marketing from facebook comunity</p>
                    <p className="text-justify text-monospace em">In prensent, the <em>Fundacion Atletica San Cristobal</em> is renamed like <em>Escuela de Pocho</em></p>
                </Col>
            </Row>

        );
    }
}
export default Tab1;