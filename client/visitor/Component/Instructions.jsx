import React from "react";

export default class Instructions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <React.Fragment>
            <br/>
                <h5> *All the attendees should be registered and done the payment before attending*</h5>

                <ul>
                    <li>Dress Code</li>
                    <ul>
                        <li>Female - White blouse with a black skirt or white saree</li>
                        <li>Male - White shirt with a black trouser</li>

                    </ul>
                    <li>Be seated half an hour before the beginning of the conferrence.</li>
                    <li>Get a book or a paper to write down important points.</li>
                    <li>AVOID getting any kind of foods to the conferrence hall.</li>
                    <li>AVOID distractions(Be kind enough to silence your phone while you are in the conferrence).</li>


                </ul>
        </React.Fragment>
    }
}