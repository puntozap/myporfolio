import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import diexsur from '../images/diexsur.JPG';
import joven from '../images/joven.JPG';
import elrondaguel from '../images/elrondaguel.JPG';
import villartechnologies from '../images/villartechnologies.gif';
import cultura from '../images/cultura.JPG';
import { Row, Col } from 'reactstrap';
class Tab4 extends React.Component {
    render() {
        return (
            <Col sm="12" className="pt-5">
                <p className="h4">Porfolio</p>
                <p>This is my work that made around 3 years in Villartechnologies</p>
                <Row>
                    <Col title="It is a CMS Wordpress and my Job was install, edit the CSS theme. It is a Website from Spain" lg={6}><img src={diexsur} width={300} /><p><a className="" href="http://diexsur.com/" target="_blank">Diexsur</a></p></Col>
                    <Col title="That Work was made with Codeigniter in MVC Arquitecture and modified the CSS interface. It is a Website From Paraguay" lg={6}><img src={joven} width={300} /><p><a className="" href="https://joven.lat/" target="_blank">Joven</a></p></Col>
                    <Col title="That Work was made in Codeigniter, install an admin template and create a CRM to clean service in Spain" lg={6}><img src={elrondaguel} width={300} /><p><a className="" href="http://control.elrondaguel.es" target="_blank">ElRondaguel</a></p></Col>
                    <Col title="It is a website that I made in Laravel Framework and I have made a backend administration and template's Implementation for to show whole information about events. In Cordoba Argentina" lg={6}><img src={cultura} width={300} /><p><a className="" href="https://cultura-global.hopto.org/" target="_blank">Cultura Global</a></p></Col>
                   
                </Row>
            </Col>
        );
    }
}
export default Tab4;