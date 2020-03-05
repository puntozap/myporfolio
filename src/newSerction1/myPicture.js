import React from 'react';
import '../newSerction1/myPicture.css';
import logo from '../images/47923552.jpg';

class MyPicture extends React.Component {
    render() {

        return (
            <div className="col-xl-3 col-lg-4" >
                <aside className="profile-side">
                    <section className="box-typical profile-side-user">

                        <img className="rounded-circle rotates-image" src={logo} alt="" width={200} />
                        <p className="text-monospace h3">Jose Zapata</p>
                        <p className="text-monospace ">Web Developer Frontend</p>
                        <div class="d-lg-none load-3 pb-3">
                            <div class="line2 d-lg-none"></div>
                            <div class="line2 d-lg-none"></div>
                            <div class="line2 d-lg-none"></div>
                        </div>
                        <p className="d-lg-none text-monospace">MAKING WEB TOOLS FOR HUMANS WITH TECHNOLOGY</p>
                        <p className="d-lg-none text-monospace">Waiting for you call</p>
                        <p><i className="fab fa-whatsapp"></i> +58 424 7647893<br /><i className="fas fa-envelope-square"></i> puntozap@gmail.com</p>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i> San Cristobal, Venezuela</p>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> August, 19th of 1987</p>
                        


                    </section>
                    <section class="box-typical">
                        <header class="box-typical-header-sm bordered text-monospace">Language</header>
                        <div class="box-typical-inner">
                            <div class="progress-compact-style">
                                <div class="progress-header">
                                    <div class="progress-lbl">Spanish (native)</div>
                                    <div class="progress-val">100%</div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: 100+'%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="progress-compact-style" title="I can read, write, hear, search information, but I need to practice my fluent to speak " style={{cursor: 'pointer'}}>
                                <div class="progress-header">
                                    <div class="progress-lbl">English</div>
                                    <div class="progress-val">50%</div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{width: 50+'%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    


                </aside>
            </div>
        );
    }
}
export default MyPicture;