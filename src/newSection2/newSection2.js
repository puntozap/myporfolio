import React from 'react';
import '../newSection2/newSection2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Tab1 from '../newSection2/tab1';
import Tab2 from '../newSection2/Tab2';
import Tab3 from '../newSection2/Tab3';
import Tab4 from '../newSection2/Tab4';

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
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}>
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}>
                            Porfolio
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
                            <Tab3 />
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Tab4 />
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
export default NewSection2;