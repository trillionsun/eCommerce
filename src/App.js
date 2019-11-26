import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import Routers from './Router'
import {withRouter} from "react-router";



function App() {
    return <div>
      <Routers/>
    </div>
}

export default withRouter(connect()(App));
