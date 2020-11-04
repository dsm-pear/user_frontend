import React, { FC, ReactElement, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReportWriting from '../src/Components/ReportWriting/ReportWriting';

const MainRouter = () => {
    return (
        <Switch>
            <Route path='/ReportWriting' component={ReportWriting}/>
        </Switch>
    );  
}

export default MainRouter;