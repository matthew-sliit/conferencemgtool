import React from 'react';
import '../assets/css/contactus.css';
import Footer from "./Footer";
export default class WorkshopMain extends React.Component {
    constructor(props) {
        super(props);
        this.state={submit:null}
        this.onformsubmit=this.onformsubmit.bind(this);
    }
    componentDidMount() {
        this.form.addEventListener("click",function (event){event.preventDefault()});
    }

    onformsubmit(){

    }
    render() {
        const submit=this.state.submit;
        return <React.Fragment>
            <div>
                <div>
                    <div class="contact-form w-75">
                        <div class="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="image"/>
                        </div>
                        <form method="#" ref={(ref) => {this.form = ref}}  action="#">

                            <h3>We want to hear from you</h3>
                            {submit!==null?"Message sent":""}
                            <div class="row">

                                <div class="form-group">
                                    <input type="text" name="txtName" class="form-control" placeholder="Your Name *"  defaultValue="" /><br/>
                                </div>

                                <div class="form-group">
                                    <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" defaultValue="" /><br/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" defaultValue="" /><br/>
                                </div>


                                <div className="form-group">
                                <textarea id="w3review" name="w3review" class="form-control" placeholder="Your Message*" rows="4" cols="25"></textarea>
                                  <br/>
                                </div>
                                <div class="form-group">
                                    <input type="submit"  onClick={()=>{this.setState({submit:true})}} name="btnSubmit" class="btnContact" value="Send Message" />
                                </div>


                            </div>
                        </form>

                </div>
            </div>
                <Footer/>
            </div>
        </React.Fragment>
    }
}



