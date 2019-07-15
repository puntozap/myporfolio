import React from 'react';
import backgrounds from '../images/bacground.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../newSerction1/newSection1.css';
class NewSection1 extends React.Component {

    render() {

        return (
            <div className='profile-header-photo'>
                <div className="profile-header-photo-in">
                    <div className="tbl-cell">
                        <div className="info-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 "></div>
                                    <div className="col-xl-8 col-lg-8 ">
                                        <p className="text-monospace h6">MAKING WEB TOOLS FOR HUMANS WITH TECHNOLOGY</p>
                                        <div class="load-3 pb-3">
                                            <div class="line"></div>
                                            <div class="line"></div>
                                            <div class="line"></div>
                                        </div>
                                        <p className="text-monospace">Waiting for you call or email</p>
                                        <p className="h2">😊</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewSection1;