import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import Header from './headerComponent/header';
import Sidebar from './sidebarComponent/sidebar';
import Contentbar from './contentbarComponent/Contentbar';
import Foot from './footerComponent/Footer';
import Create_metrics from './metrics/Create_metrics';
import Update_metrics from './metrics/Update_metrics';
import Delete_metrics from './metrics/Delete_metrics';
import Page_not_found from './metrics/Page_not_found';
import Create_score from './scores/Create_score';
import Update_score from './scores/Update_score';
import Delete_score from './scores/Delete_score';


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Header/>
          <section>
            <Sidebar/>
            <Switch>
              <Route exact path="/" component={Contentbar}/>
              <Route path="/create_metrics" component={Create_metrics}/>
              <Route path="/update_metrics" component={Update_metrics}/>
              <Route path="/delete_metrics" component={Delete_metrics}/> 
              <Route path="/create_score" component={Create_score}/>
              <Route path="/update_score" component={Update_score}/>
              <Route path="/delete_score" component={Delete_score}/> 
              <Route component={Page_not_found}/> 
            </Switch>
          </section> 
          <Foot/>
      </React.Fragment>
      
    );
  }
}

export default App;
