import React from 'react';

export default class WorkshopMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div id="content" className="position-relative">
                <div className="card">
                    <div className="card-body">
                        <div className="section-header">

                    <h2 class="text-primary">Workshops</h2>
                </div>

                <p>Following is the list of workshops, which will be organized as a part of ICAF 2021. </p>

                <p><b>Registration Deadline:</b> To be informed</p>



                    <div className="row">
                        <div className="col-lg-12">

                            <p><b>Advanced Instrumental Techniques and Future of Advanced Materials</b></p>
                            {/*<p>This workshop is based on advanced instrumental methods as well as future materials.*/}
                            {/*    Advanced instrumental methods, such as scanning electron microscopy (SEM) and*/}
                            {/*    transmission electron microscopy (TEM), are widely utilized in experimental research*/}
                            {/*    across a wide range of scientific and engineering disciplines.</p>*/}
                            {/*<p>Resource Persons: Dr. Galhenage A. Sewvandi, Prof. Vasdevan P. Biju, Prof. Dengwei Hu</p>*/}
                            <p><a style={{color:"blue"}} href="http://mercon.mrt.ac.lk/docs/workshops/workshop1.pdf"
                                  target="_blank">Download the Workshop Flyer</a></p>

                        </div>
                    </div>




                        <div className="row">
                            <div className="col-lg-12">
                                <div className="workshop-02" id="accordion">
                                    <p><b>Introduction for Computational Fluid Dynamics</b></p>
                                    {/*<p>In many engineering fields, computational fluid dynamics (CFD) has become a*/}
                                    {/*    popular technique for modeling heat and fluid flow applications. Accurate*/}
                                    {/*    findings from CFD require a thorough grasp of underpinning modeling concepts as*/}
                                    {/*    well as technical know-how developed through experience.</p>*/}
                                    {/*<p>Resource Persons: Dr. R.A.C.P. Ranasinghe, Dr. N.A.I.D. Nissanka</p>*/}
                                    <p><a style={{color:"blue"}} href="http://mercon.mrt.ac.lk/docs/workshops/workshop2.pdf"
                                          target="_blank">Download the Workshop Flyer</a></p>
                                </div>
                            </div>
                        </div>




                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="workshop-03" id="accordion">
                                        <p><b>Digital Technology Deployment in Apparel Product Development</b></p>
                                        {/*<p>Various business methods, ranging from mass manufacturing to mass*/}
                                        {/*    customization, need digital technologies. Clothing manufacturers are*/}
                                        {/*    increasingly offering digital customisation as a result of the fast*/}
                                        {/*    development and acceptance of digital technology (Yan & Chiou, 2020).</p>*/}
                                        {/*<p>Resource Persons: Dr. R.K. Jayamali De Silva, Dr. Simeon Gill, Dr. Kristina*/}
                                        {/*    Brubacher, Dr. Ranga Prasad Abeysooriya</p>*/}
                                        <p><a style={{color:"blue"}}
                                              href="http://mercon.mrt.ac.lk/docs/workshops/workshop3.pdf"
                                              target="_blank">Download the Workshop Flyer</a></p>
                                    </div>
                                </div>
                            </div>



                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="workshop-04" id="accordion">
                                            <p><b>Work-Study for Productivity Improvement in Manufacturing
                                                Organizations</b></p>
                                            {/*<p>Line balance, manning, and man-machine interaction are all problems that*/}
                                            {/*    most manufacturing companies face. All of this contributes to the*/}
                                            {/*    organization's decreased productivity. Work-study (method and time*/}
                                            {/*    studies) analyzes and helps to resolve the difficulties mentioned above*/}
                                            {/*    in a scientific manner.</p>*/}
                                            {/*<p>Resource Persons: Dr. Himan Punchihewa, Dr. J.R. Gamage, Industrial*/}
                                            {/*    Engineering Academic Group (IEAG)</p>*/}
                                            <p><a style={{color:"blue"}}
                                                  href="http://mercon.mrt.ac.lk/docs/workshops/workshop4.pdf"
                                                  target="_blank">Download the Workshop Flyer</a></p>
                                        </div>
                                    </div>
                                </div>




                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="workshop-05" id="accordion">
                                                <p><b>Biomedical Product Development - A Sri-Lankan Perspective</b></p>
                                                {/*<p>This workshop aims to raise knowledge of the interdisciplinary nature*/}
                                                {/*    of merging engineering, medicine, and commerce, as well as the*/}
                                                {/*    critical step-by-step procedure that must be followed in Sri Lanka*/}
                                                {/*    for effective biomedical device development. The presenters, who are*/}
                                                {/*    members of the growing CeBI network of practitioners, will*/}
                                                {/*    demonstrate this using Sri Lankan success stories.</p>*/}
                                                {/*<p>Resource Persons: Dr. Pujitha Silva, Prof. Saroj Jayasinghe, Dr.*/}
                                                {/*    Travis Perera, Dr. Angelo Karunaratne, Dr. Nuwan Dayananda, Mr.*/}
                                                {/*    Ajith Indikadulla</p>*/}
                                                <p><a style={{color:"blue"}}
                                                    href="http://mercon.mrt.ac.lk/docs/workshops/workshop5.pdf"
                                                      target="_blank">Download the Workshop Flyer</a></p>
                                            </div>
                                        </div>
                                    </div>


                </div>
                </div>



            </div>
        </React.Fragment>
    }
}



