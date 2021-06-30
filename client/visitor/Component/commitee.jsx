import React from "react";
import '../../shared/assets/css/home.css';
import '../../shared/assets/css/home-page-design.css';
import img1 from 'url:../../shared/assets/img/signup.png';
import w1 from 'url:../../shared/assets/img/w1.jpg';
import w2 from 'url:../../shared/assets/img/w2.jpg';
import m1 from 'url:../../shared/assets/img/m1.jpg';
import m2 from 'url:../../shared/assets/img/m2.png';
import m3 from 'url:../../shared/assets/img/m3.jpg';
import m4 from 'url:../../shared/assets/img/m4.jpg';
import Footer from "./Footer";

export default class Commitee extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div>
                <div className="justify-content-center">
                <div className="container about-title clearfix mx-auto">
                    <h1><span>Organizing Commitee</span></h1>
                </div>
                        <ul className="row">
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={m1} className="img-responsive" alt=""/></figure>
                                    <h3>Prof. N. P. Ranamukaarachchi</h3>
                                    <p>General Chair</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={m2} className="img-responsive" alt=""/></figure>
                                    <h3>Prof. G. C. Herath</h3>
                                    <p>General Co-Chair</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={w1} className="img-responsive" alt=""/></figure>
                                    <h3>Dr A.R. Gamage</h3>
                                    <p>General Co-Chair</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={w2} className="img-responsive" alt=""/></figure>
                                    <h3>Dr D. K. Howpage</h3>
                                    <p>Secretary</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={m3} className="img-responsive" alt=""/></figure>
                                    <h3>Ms K. L. Samarathunge</h3>
                                    <p>Assistant Secretary</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={m4} className="img-responsive" alt=""/></figure>
                                    <h3>Dr G. A. Dharmasena</h3>
                                    <p>Assistant Secretary</p>

                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
            <Footer/>
        </React.Fragment>

    }
}
