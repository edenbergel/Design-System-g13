import React from 'react';
import './tabs.scss';

function Tabs(props) {
  
  return (
    <div className='tabs__wrapper'>
      <h2 className={props.signup === true ? 'active' : ''} onClick={props.formSignUp}>
        Se connecter
      </h2>
      <h2 className={props.signup === false ? 'active' : ''} onClick={props.formSignIn}>
        S'inscrire
      </h2>
    </div>
  )
}

export default Tabs;