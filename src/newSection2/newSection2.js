import React from 'react';
import '../newSection2/newSection2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Tab1 from '../newSection2/tab1';
import Tab2 from '../newSection2/Tab2';

class NewSection2 extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            About me
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('3'); }}>
                            Moar Tabs 3
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="2">
                        <Tab1 />   
                    </TabPane>
                    <TabPane tabId="1">
                        <Tab2 />
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 13 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
export default NewSection2;