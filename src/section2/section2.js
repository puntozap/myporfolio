import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../section2/section2.css';
import diexsur from '../images/diexsur.JPG';
import joven from '../images/joven.JPG';
import elrondaguel from '../images/elrondaguel.JPG';
// import villartechnologies from '../images/villartechnologies.gif';
import cultura from '../images/cultura.JPG';
import {
    Col,
    Row,
    Container
} from 'reactstrap';

class Section2 extends React.Component {
    
    render() {
       
        return (
            <section className="section2 pt-5 pb-5"> 
                <Container>
                    <Row>
                        <Col lg={12}><h2>Porfolio</h2><p>I consider the best work I create in Villartechnologies. from 2015 - Actually</p></Col>
                        <Col title="It is a CMS Wordpress and my Job was install, edit the CSS theme. It is a Website from Spain" lg={6}><img src={diexsur}  width={400} /><p><a className="text-white" href="http://diexsur.com/" target="_blank">Diexsur</a></p></Col>
                        <Col title="That Work was made with Codeigniter in MVC Arquitecture and modified the CSS interface. It is a Website From Paraguay" lg={6}><img src={joven}  width={400} /><p><a className="text-white" href="https://joven.lat/" target="_blank">Joven</a></p></Col>
                        <Col title="That Work was made in Codeigniter, install an admin template and create a CRM to clean service in Spain" lg={6}><img src={elrondaguel}  width={400} /><p><a className="text-white" href="http://control.elrondaguel.es" target="_blank">ElRondaguel</a></p></Col>
                        <Col title="It is a website that I made in React JS with Laravel like API REST to add porfolios." lg={6}><img src={cultura} width={400} /><p><a className="text-white" href="https://cultura-global.hopto.org/"  target="_blank">Cultura Global</a></p></Col>
                       
                        
                    </Row>
                </Container>
            </section>
        );
    }
}
export default Section2;