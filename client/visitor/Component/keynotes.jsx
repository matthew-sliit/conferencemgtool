import React from "react";
import '../../shared/assets/css/home.css';
import '../../shared/assets/css/home-page-design.css';
import img1 from 'url:../../shared/assets/img/signup.png';

export default class Keynotes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <h3 className="keynote">Prof. Elizabeth Melinda</h3>
                        <h5 className="text-center">Department of Psychological Medicine, University of Auckland</h5>


                        <p className="card-text">Prof. Elizabeth initially trained as an electrical and electronic
                            engineer at Canterbury University to pursue her interest in robotics. She then worked at
                            Transpower, Électricité de Tahiti, and Robotechnology. After becoming interested in the
                            psychological aspects of robotics and in psychoneuroimmunology, she obtained her MSc and PhD
                            in health psychology, supported by a Bright Futures Top Achiever Doctoral Award.

                            She received an Early Career Award from the International Society of Behavioural Medicine
                            and Early Career Research Excellence Award from the University of Auckland. She was a
                            visiting academic at the school of psychology at Harvard University and in the Program in
                            Science, Technology, and Society at Massachusetts Institute of Technology in Boston, USA. In
                            2017, she returned to Boston with a Fulbright award to study companion robots for four
                            months.

                            Her current research interests include how stress affects our health, how our body posture
                            affects our mood, interventions to help patients make sense of and cope with illness, and
                            human-robot interaction in health contexts. She is particualrly interested in the emotional
                            connections we form with robots, and how we can build emotional intelligence and empathy
                            skills in robots.

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
                        <h3 className="keynote">Prof. B.L. William Wong</h3>
                        <h5 className="text-center">Middlesex University London</h5>

                        <p className="card-text">Prof. B.L. William Wong PhD BCom (Hons) FBCS FNZCS is Professor of Human-Computer Interaction and Head Interaction Design Centre. He is also Principal Scientist at Genetec, Inc. where he is currently on sabbatical to commercialise IP from his team’s research.

                            His research is in cognitive engineering and the representation and interaction design of user interfaces that enhance situation awareness, sense-making, reasoning, decision making and transparency in human-machine teams. His investigations have included complex dynamic environments such as emergency ambulance command and control, air traffic control, and hydro-electricity dispatch.

                            He was Project Coordinator for the 18-organisation multi-disciplinary EU-funded FP7 VALCRI project. The project consortium worked with police forces to develop a suite of advanced sense-making, data processing and analytics tools. Key IP from this project was acquired by Genetec, Inc., a global security systems company based in Montreal, Canada, shortly after the completion of the project.

                            He has received over US$25.3 million in grants and has published over 120 scientific peer reviewed articles with his students and colleagues. Throughout his career, he has been engaged in setting up new ventures to carry out new work.</p>
                    </div>

                </div>


                <br/>


                <div className="card key">
                    <div className="card-body justify-content-center">

                        <div className="container ">
                            <figure><img src={img1} className="img-responsive mx-auto d-block" alt=""/></figure>
                        </div>
                        <h3 className="keynote">Prof. Xiaobo Qu</h3>
                        <h5 className="text-center">Urban Mobility Systems, Architecture and Civil Engineering, Chalmers University of Technology, Sweden</h5>

                        <p className="card-text">The forthcoming revolution of transport engineering needs an interdisciplinary perspective between civil engineering,
                            automatic control, vehicle engineering, and communications. In this seminar, a few recent studies will be presented
                            to improve infrastructure performance through the consolidation of these systems. We use two applications to illustrate
                            the future integration: Optimal Eco-driving Control of Autonomous and Electric Trucks in Adaptation to Highway Topography
                            and optimal trajectory design for vehicle sorting to facilitate emergency vehicles in freeway configurations. For the former
                            application, we embed the trajectory optimization in a model predictive control framework in order to regulate the real time
                            speeds of trucks for energy optimization and battery life extension. For the latter application, we propose a cooperative
                            control strategy to provide local Emergency vehicles (EVs) preemption at highway configurations. The basic idea is to clear
                            the lane to be used by EV through cooperative driving with surrounding connected and automated vehicle platoons.
                            We also predict the way forward for future transport systems.</p>
                    </div>

                </div>

                <br/>

            </div>
        </React.Fragment>
    }
}
