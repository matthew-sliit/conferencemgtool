import React from 'react';
import picture from 'url:../assets/workshopguidelines.png'

export default class WorkshopSubmission extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>

            <div id="content" className="position-relative">
                <h2 class="text-primary">Format of Workshop Proposal</h2>
                <div className="row">
                    <div className="col-md-5 how-img">
                        <img src={picture} alt="" width="500" height="550"/>
                    </div>
                    <div className="col-sm-6">
                        <h4>Contents</h4>
                           <b>
                            <ol>
                                <li>Workshop Organizers logo</li>
                                <li>Title of Workshop</li>
                                <li>Preferred Image</li>
                                <li>Scope and topics of the workshop (max 1 page)</li>
                                <li>Rationale (max 1 page)
                                    <ul>
                                        <li>Why is this a current and relevant topic?</li>
                                        <li>Why will a large number of high-quality entries be attracted to the
                                            workshop?
                                        </li>
                                        <li>In addition to the writers, why would the workshop draw such a huge crowd?
                                        </li>
                                    </ul>
                                </li>
                                <li>A brief biography of the event's organizers</li>
                                <li>Names of possible participants, such as members of the program committee and invited
                                    speakers
                                </li>
                                <li>Planned format of the workshop, including
                                    <ul>
                                        <li>Duration of the workshop: Half-day, Full-day and tentative schedule</li>
                                        <li>Preferred day of workshop</li>
                                        <li>Number of refereed papers, hot topic sessions, keynotes</li>
                                        <li>Workshop forms that are unique, innovative, and original are greatly
                                            welcomed.
                                        </li>
                                    </ul>
                                </li>
                                <li>An outline of the marketing strategy</li>
                                <li>Website address</li>
                            </ol>
                           </b>
                    </div>
                </div>
            </div>
        </React.Fragment>

    }
}