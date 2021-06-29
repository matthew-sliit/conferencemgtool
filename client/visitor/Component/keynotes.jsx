import React from "react";
import '../../shared/assets/css/home.css';
import '../../shared/assets/css/home-page-design.css';
import img1 from 'url:../../shared/assets/img/signup.png';
import resources from "../resource.config";
import Footer from "./Footer";
export default class Keynotes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            keynotes:[]
        }
    }
    async componentDidMount() {
        let conference = null;
        await fetch(resources.proxy("/editor/conference"),{
            method:'get'
        }).then(r=>r.text()).then(d=>{conference=JSON.parse(d)}).catch(e=>console.log(e));
        console.log(JSON.stringify(conference));
        this.setState({keynotes:conference.keynotes});
    }
    render() {
        const keynotes = this.state.keynotes;

        return <React.Fragment>
            <div id="content" className="position-relative">
                <div className="container about-title clearfix mx-auto">
                    <h1><span>Keynote Speakers</span></h1>
                </div>
                <div className="card key">
                    <div className="card-body justify-content-center">

                        <div className="container ">
                            <figure><img src={img1} className="img-responsive mx-auto d-block" alt=""/></figure>
                        </div>
                        {/*<h3 className="keynote">Prof. Elizabeth Melinda</h3>*/}
                        <h3 className="keynote">{keynotes.length>0?keynotes[0].name:"Prof. Elizabeth Melinda"}</h3>
                        <h5 className="text-center">Department of Psychological Medicine, University of Auckland</h5>


                        <p className="card-text">Prof. Elizabeth studied electrical and electronic engineering at Canterbury University in orde
                            r to follow her passion for robots. She went on to work with Transpower, Tahiti Electricity,
                            and Robotechnology. She earned her MSc and PhD in health psychology with the help of a Bright Futures
                            Top Achiever grant after getting interested in the psychological elements of robots and
                            psychoneuroimmunology.

                            The International Society of Behavioural Medicine presented her with an Early Career Award,
                            and the University of Auckland presented her with an Early Career Research Excellence Award.
                            She worked as a visiting professor at Harvard University's psychology department and the Massachusetts
                            Institute of Technology's Program in Science, Technology, and Society.
                            Her Fulbr scholarship allowed her to return to Boston in 2017.

                            She received an Early Career Award from the International Society of Behavioural Medicine
                            and Early Career Research Excellence Award from the University of Auckland. She was a
                            visiting academic at the school of psychology at Harvard University and in the Program in
                            Science, Technology, and Society at Massachusetts Institute of Technology in Boston, USA. In
                            2017, she returned to Boston with a Fulbright award to study companion robots for four
                            months.

                            Her current research interests include how stress impacts our health, how our posture affects our mood,
                            treatments to assist patients understand and manage with disease, and human-robot interaction in health settings.
                            She's particularly interested in the emotional bonds humans develop with robots, as well as how we might teach robots
                            emotional intelligence and empathy.

                            Her work has been supported by grants from many agencies including the Health Research
                            Council, Auckland Medical Research Foundation, Heart Foundation, Oakley Mental Health
                            Research Foundation, Maurice and Phyllis Paykel Trust, and the Foundation o</p>
                    </div>

                </div>


                <br/>

                <div className="card key">
                    <div className="card-body justify-content-center">

                        <div className="container ">
                            <figure><img src={img1} className="img-responsive mx-auto d-block" alt=""/></figure>
                        </div>
                        {/*<h3 className="keynote">Prof. B.L. William Wong</h3>*/}
                        <h3 className={"keynote"}>{keynotes.length>0?keynotes[1].name:"Prof. B.L. William Wong"}</h3>
                        <h5 className="text-center">Middlesex University London</h5>

                        <p className="card-text">William Wong PhD BCom William Wong (Hons) FBCS FNZCS is a human-computer and manager-design center professor.
                            He is also a lead scientist at Genetec, Inc. where he's now on a sabbatical stage to market IPs from the research
                            of his team. His work focuses on cognitive engineering and the representation and design of user interfaces that
                            increase awareness of the situation, sense making, reasoning, decision-making, and transparency in teams of human equipment.
                            His research includes complicated dynamic settings such as controlling and controlling the emergency ambulance, regulation
                            of air traffic and dispatch of hydro energy.He was Project Coordinator of the multidisciplinary EU-funded VALCRI 18-organization
                            FP7 project. A series of advanced tools in sense making, data processing and analysis have been developed in collaboration with the police. Genetec, Inc., a worldwide
                            corporation located in Montreal, Canada, acquired the key IP for this project shortly after it was completed. He was awarded more
                            than $25.3 million in funding and alongside his students and colleagues produced over 120 paper reviews by scientists.
                            He has been involved in the setting up of new businesses for new tasks throughout his career.is students and colleagues. Throughout his career, he has been engaged in setting up new ventures to carry out new work.</p>
                    </div>

                </div>


                <br/>


                <div className="card key">
                    <div className="card-body justify-content-center">

                        <div className="container ">
                            <figure><img src={img1} className="img-responsive mx-auto d-block" alt=""/></figure>
                        </div>
                        {/*<h3 className="keynote">Prof. Xiaobo Qu</h3>*/}
                        <h3 className="keynote">{keynotes.length>0?keynotes[2].name:"Prof. Xiaobo Qu"}</h3>
                        <h5 className="text-center">Urban Mobility Systems, Architecture and Civil Engineering, Chalmers University of Technology, Sweden</h5>

                        <p className="card-text">The future transportation revolution requires an interdisciplinary view of civil engineering, automated inspection,
                            vehicle engineering and communication. A few current research will be discussed at this session in order to increase
                            infrastructure performance by consolidating these systems. We are using two applications to show future integration:
                            Optimum eco-driving autonomous and electric truck controls in adaptation to road topographies and optimal vehicle sorting
                            trajectory design to enable emergency vehicles in highway configurations.In order to regulate the truck real-time speed for
                            energy optimisation and battery life extensions we incorporate trajectory optimization in our former application into a models
                            predictive control framework. For this latter use, we suggest a cooperative control method to allow pre-emption for local emergency
                            vehicles on highways. The fundamental idea is to free the path to be used by EV by cooperative driving with automatically connected
                            platforms. We also forecast how future transport systems can be implemented.</p>
                    </div>
                </div>
                <br/>
            </div>
            <Footer/>
        </React.Fragment>
    }
}
