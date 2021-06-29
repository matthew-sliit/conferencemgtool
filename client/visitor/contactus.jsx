import React from 'react';
import './assets/css/contactus.css';

export default class WorkshopMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
.
            <div id="content" className="position-relative ">
                <div class="row">

                    <div class="container contact-form">

                        <div class="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="image"/>
                        </div>

                        <form method="post">


                            <h3>Send Us a Message</h3>

                            <div class="row">

                                <div class="form-group">
                                    <input type="text" name="txtName" class="form-control" placeholder="Your Name *"  value="" /><br/>
                                </div>

                                <div class="form-group">
                                    <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" /><br/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" /><br/>
                                </div>


                                <div className="form-group">
                                <textarea id="w3review" name="w3review" class="form-control" placeholder="Your Message*" rows="4" cols="25"></textarea>
                                  <br/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                                </div>


                            </div>
                        </form>
                </div>

            </div>

            </div>
        </React.Fragment>
    }
}



