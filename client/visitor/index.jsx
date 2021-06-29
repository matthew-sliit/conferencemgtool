import React from "react";
import {render} from "react-dom";
import App from "./App";
import NewsList from "./Component/NewsList";
render(<App/>, document.getElementById('content'));

render(<NewsList/>, document.getElementById('news_related_things'));