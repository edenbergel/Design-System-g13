import React from 'react';
import './form.scss';

import Buttons from '../Buttons/Buttons';

function Login(props) {
  
  return (
    <div className="form__wrapper">
      <form>
        <label htmlFor="email"></label>
        <input 
          type="email" 
          id="email" 
          placeholder="Email" 
          value={props.email} 
          onChange={props.handleChange}
        />

        <label htmlFor="password"></label>
        <input 
          type="password" 
          id="password" 
          placeholder="Mot de passe" 
          value={props.password} 
          onChange={props.handleChange}
        />
        <p className="password__wording wording__cursor"><u>Mot de passe oublié</u></p>

        <Buttons />
      </form>
    </div>
  )
}

export default Login;