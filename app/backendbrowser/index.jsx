import React from "react";
import {render} from "react-dom";

const element = (
  <form method="get" action="http://localhost:3000/login">
        <input type="submit" value="server get"/>
  </form>
);
render(<h1>Welcome to the Backend!</h1>, document.getElementById('body'));
render(element, document.getElementById('body'));