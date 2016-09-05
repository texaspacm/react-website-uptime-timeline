import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import newId from './utils/newid.js';
import './css/flexbox-0e6e75.webflow.css';
import './css/normalize.css';
import './css/webflow.css';

class TimelineTick extends Component {
  componentWillMount() {
        // Gettting a unique ID for the <ReactTooltip> component.  This may only work in client side apps.
        this.id = newId();
    }

  render () {
    var tick;
    //var message = this.props.message
    if (this.props.message) {
      tick = <div className={this.props.color} data-tip data-for={this.id}>
                <ReactTooltip id={this.id} type='light' effect='solid' border='true'>
                  <span><b>{this.props.message}</b></span>
                </ReactTooltip>
             </div>
    } else {
      tick = <div className={this.props.color}></div>
    }
    return (
      tick
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="section">
        <div className="container w-container">
          <div className="timeline">
             <TimelineTick color="_empty"/>
             <TimelineTick color="_empty"/>
             <TimelineTick color="_empty"/>
             <TimelineTick color="_empty"/>
             <TimelineTick color="_empty"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_orange" message="15 Minute Outage"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_red" message="90 Minute Outage" />
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_orange" message="5 Minute Outage"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_green"/>
             <TimelineTick color="_current_day"/>
           </div>
         </div>
       </div>
    );
  }
}

export default App;
