import React from 'react';

export default class ConferencePapers extends React.Component{

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <React.Fragment>
            <h5>List of Research Papers</h5>
            <table className="table table-responsive table-hover table-primary">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Resource</th>
                    <th scope="col">Accept</th>
                    <th scope="col">Reject</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Paper1</td>
                    <td>26/2/2021</td>
                    <td><p><a style={{color:"blue"}} href="http://mercon.mrt.ac.lk/docs/workshops/workshop5.pdf" target="_blank">Conference
                        Paper1</a></p></td>
                    <td><input type="submit" name="btnSubmit" className="btn btn-success" value="Accept"/></td>
                    <td><input type="submit" name="btnSubmit" className="btn btn-danger" value="Reject"/></td>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Paper2</td>
                    <td>13/2/2021</td>
                    <td><p><a style={{color:"blue"}} href="http://mercon.mrt.ac.lk/docs/workshops/workshop5.pdf" target="_blank">Conference
                        Paper2</a></p></td>
                    <td><input type="submit" name="btnSubmit" className="btn btn-success" value="Accept"/></td>
                    <td><input type="submit" name="btnSubmit" className="btn btn-danger" value="Reject"/></td>
                </tr>

                </tbody>
            </table>

        </React.Fragment>

    }

}


