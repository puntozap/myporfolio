import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'reactstrap';
class Tab3 extends React.Component {
    render() {
        return (
            <Col sm="12" className="pt-5">
                <p className="h4 ">Programming skills</p>

                <Row>
                    <Col lg="4">
                        <p className="h5 text-justify">PHP</p>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">PHP native</div>
                                <div class="progress-val">70%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 60 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Laravel</div>
                                <div class="progress-val">50%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: 50 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Yii2</div>
                                <div class="progress-val">20%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: 20 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <p className="h5 text-justify">Javascript</p>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Javascript native</div>
                                <div class="progress-val">60%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 60 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">React JS</div>
                                <div class="progress-val">40%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: 40 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">JQuery</div>
                                <div class="progress-val">70%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 70 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <p className="h5 text-justify">Web Design</p>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">HTML</div>
                                <div class="progress-val">80%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 80 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">CSS</div>
                                <div class="progress-val">90%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 90 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="12"><hr /></Col>
                    <Col lg="4">
                        <p className="h5 text-justify">Database</p>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">MySql</div>
                                <div class="progress-val">80%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 80 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">API REST CREATION</div>
                                <div class="progress-val">40%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: 40 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <p className="h5 text-justify">Design software</p>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Photoshop</div>
                                <div class="progress-val">40%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: 40 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Ilustrator</div>
                                <div class="progress-val">40%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: 40 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Premiere</div>
                                <div class="progress-val">40%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: 40 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <p className="h5 text-justify">Personality</p>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Good Comunication</div>
                                <div class="progress-val">100%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 100 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Puntually</div>
                                <div class="progress-val">100%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 100 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Creativity</div>
                                <div class="progress-val">100%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 100 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress-compact-style">
                            <div class="progress-header">
                                <div class="progress-lbl">Organized</div>
                                <div class="progress-val">90%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: 90 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="12"><hr/></Col>
                    <Col lg="4"></Col>
                    <Col lg="4"></Col>
                    <Col lg="4"></Col>
                </Row>
            </Col>
        );
    }
}
export default Tab3;