import React from 'react';
import './tabs.scss';

function Tabs(props) {
  
  return (
    <div className='tabs__wrapper'>
      <h3 className={props.signup === true ? 'active' : ''} onClick={props.formSignUp}>
        Se connecter
      </h3>
      <h3 className={props.signup === false ? 'active' : ''} onClick={props.formSignIn}>
        S'inscrire
      </h3>
    </div>
  )
}

export default Tabs;