import React, {useState} from 'react';
import './signup.scss';

import Tabs from '../Tabs/Tabs';
import Login from '../Form/Login';
import Register from '../Form/Register';

function SignUp() {

  const [signup , setSignup] = useState(true);

  const [registrate, setRegistrate] = useState({
    email: "",
    password: ""
  })

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  

  const handleChange = (e) => {
    const {id , value} = e.target   
    setRegistrate(prevState => ({
        ...prevState,
        [id] : value
    }))

    setLogin(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const formSignUp = () => {
    setSignup(true)
  }

  const formSignIn = () => {
    setSignup(false)
  }

  return (
    <div className='signup__wrapper'>
      <div className='signup__inner--wrapper'>
        <Tabs formSignUp={formSignUp} formSignIn={formSignIn} signup={signup} />
        { signup ? (
            <Login email={login.email} password={login.password} handleChange={handleChange} />
          ) : (
            <Register email={registrate.email} password={registrate.password} handleChange={handleChange} />
          )
        }
      </div>

      <p>En vous inscrivant, vous acceptez les <u className="wording__cursor">Conditions générales d’utilisation</u> <span>et la <u className="wording__cursor">Politique de confidentialité</u></span></p>
    </div>
  );
}

export default SignUp;