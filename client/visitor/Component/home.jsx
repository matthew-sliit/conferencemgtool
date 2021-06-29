import React from "react";
import '../../shared/assets/css/home.css';
import '../../shared/assets/css/home-page-design.css';
import bg from 'url:../../shared/assets/img/conbg.jpg';
import con1 from 'url:../../shared/assets/img/con1.jpg';
import con2 from 'url:../../shared/assets/img/con2.jpg';
import con3 from 'url:../../shared/assets/img/con3.png';
import img1 from 'url:../../shared/assets/img/signup.png';
import Footer from "./Footer";
import resources from "../resource.config";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            startDate:"",endDate:""
        }
    }
    async componentDidMount() {
        let conference = null;
        await fetch(resources.proxy("/editor/conference"),{
            method:'get'
        }).then(r=>r.text()).then(d=>{conference=JSON.parse(d)}).catch(e=>console.log(e));
        console.log(JSON.stringify(conference));
        this.setState({startDate:conference.startDate});
        this.setState({endDate:conference.endDate});
    }
    render() {
        const startDateISO = this.state.startDate;
        const endDateISO = this.state.endDate;
        let showDates = "";
        if(startDateISO!==""&&endDateISO!==""){
            let startDate = new Date(startDateISO);
            let start = startDate.toString();
            let startDateString = start.substring(0,start.indexOf("2021"));
            let endDate = new Date(endDateISO);
            let end = endDate.toString();
            let endDateString = end.substring(0,end.indexOf("2021"));
            if(startDate<endDate){
                showDates = ""+startDateString+" to "+endDateString;
            }else if(startDateString===endDateString){
                showDates = ""+startDateString;
            }else{
                showDates = "To be informed";
            }
        }
        return <React.Fragment>
            <div id="content" className="position-relative">
                <header>

                    <div
                        className="p-5 text-center bg-image"
                        style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",width:"100%"}}>
                        <div className="mask" >
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white">
                                    <div className="container slider-top-text">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <h4 className="my-heading">4TH INTERNATIONAL CONFERENCE ON</h4>
                                                <h3 className="my-heading">ADVANCEMENTS IN COMPUTING 2021</h3><br/><br/><br/>

                                                <div className="alert alert-primary col-md-10 container">
                                                    {/*<h5 className="myp text-center">11th, 12th and 13th October 2021</h5>*/}
                                                    <h5 className="myp text-center">{showDates}</h5>
                                                </div>
                                                <h4 className="myp text-center">Sri Lanka Institute of Information Technology</h4>

                                                <a className="btn btn-lg btn-primary" href="#">Book Tickets Now</a>

                                            </div>
                                            <div className="col-md-12 text-center mt-5">
                                                <div className="scroll-down">
                                                    <a className="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i className="fa fa-angle-down"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="about-section paddingTB60 gray-bg">
                    <div className="container">
                        <div className="row h-100 text-center">
                            <div className="about-title clearfix mx-auto">
                                <h1><span>About Conference</span></h1>
                                <h3>4TH INTERNATIONAL CONFERENCE ON ADVANCEMENTS IN COMPUTING 2021 </h3>
                                <p className="about-paddingB">
                                    The 4th International conference on advancements in computing -2021 (ICAF2021) is
                                    organized by the Faculty of Computing of the Sri Lanka Institute of Information
                                    Technology (SLIIT) as an open forum
                                    for academics along with industry professionals to present the latest findings and
                                    research output and practical deployments in the Computer Science and Information
                                    Technology domains. Primary objective
                                    of the ICAF is to uplift the research culture and the quality of research done by
                                    Sri Lankan researchers. This conference will create a platform for national and
                                    international researchers to showcase
                                    their research output, networking opportunities to discuss innovative ideas, and
                                    initiate
                                    collaborative work. ICAF 2019 and ICAF 2020 were successfully conducted with a
                                    technical co-sponsorship by IEEE Sri Lanka Section and all publications are
                                    available in IEEE Xplore digital library
                                </p>
                                <p>October 11 - 13 in Sri Lanka Institute of Information Technology</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="our-webcoderskull" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",width:"100%"}}>
                    <div className="container">
                        <div className="row heading heading-icon">
                            <h2>Keynote Speakers</h2>
                        </div>
                        <ul className="row">
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={img1} className="img-responsive" alt=""/></figure>
                                    <h3><a href="/keynotes">Prof. Elizabeth Melinda</a></h3>
                                    <p>Department of Psychological Medicine, University of Auckland</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={img1} className="img-responsive" alt=""/></figure>
                                    <h3><a href="/keynotes">Prof. B.L. William Wong</a></h3>
                                    <p>Middlesex University London</p>

                                </div>
                            </li>
                            <li className="col-4">
                                <div className="cnt-block equal-hight" style={{height: "300px"}}>
                                    <figure><img src={img1} className="img-responsive" alt=""/></figure>
                                    <h3><a href="/keynotes">Prof. Xiaobo Qu</a></h3>
                                    <p>Urban Mobility Systems, Architecture and Civil Engineering, Chalmers University of Technology, Sweden</p>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="about-section paddingTB60 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="box-icon"><span className="fa fa-4x fa-users"></span></div>
                                    <div className="info">
                                        <h3 className="text-center">500</h3>
                                        <h4 className="text-center">Attendees</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="box-icon"><span className="fa fa-4x fa-microphone"></span></div>
                                    <div className="info">
                                        <h3 className="text-center">3</h3>
                                        <h4 className="text-center">Keynote Speakers</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="box-icon"><span className="fa fa-4x fa-calendar"></span></div>
                                    <div className="info">
                                        <h3 className="text-center">3</h3>
                                        <h4 className="text-center">Days</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="box-icon"><span className="fa fa-4x fa-book"></span></div>
                                    <div className="info">
                                        <h3 className="text-center">40</h3>
                                        <h4 className="text-center">Workshops</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row h-100 text-center">
                            <div className="about-title clearfix mx-auto">
                                <h1><span>Past ICAC Conferences</span></h1>
                            </div>
                            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
                                 data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={con1} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={con2} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={con3} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    }
}
