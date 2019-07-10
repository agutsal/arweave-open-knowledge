import React from 'react';
import "../App.css";
import logo from "../logo.svg";

const propTypes = {};

const defaultProps = {};

class DefaultComponent extends React.Component {
  static propTypes:any = {};
  static defaultProps:any = {};

  render() {
    return (
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
            <div>
             <div className="main-card card w-100" style={{zIndex:1}}/>
           </div>
         </header>
    );
  }
};

DefaultComponent.propTypes = propTypes;
DefaultComponent.defaultProps = defaultProps;

export default DefaultComponent;
