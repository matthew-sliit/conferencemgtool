import jest from 'jest';
import React from 'react';
import renderer from 'react-test-renderer';

import WorkshopSubmission from "../Component/workshopSubmission";

test("Workshop submission renders properly",()=>{
    const component = renderer.create(<WorkshopSubmission/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})