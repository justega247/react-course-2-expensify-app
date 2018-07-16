// HIGHER ORDER COMPONENT (HOC) -> It's just a component that renders other components
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}      
      <WrappedComponent {...props}/>
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/> 
      ) : (
        <p>Please login to continue</p>
      )}
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

const appRoot = document.getElementById('app');

// ReactDOM.render(<AdminInfo isAdmin={true} info='This is what you seek' />, appRoot);
ReactDOM.render(<AuthInfo isAuthenticated={false} info='This is what you seek' />, appRoot);