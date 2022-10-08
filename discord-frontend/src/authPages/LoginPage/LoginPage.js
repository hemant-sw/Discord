import React, {useState, useEffect} from 'react';
import { AuthBox } from '../../shared/components/AuthBox';
import { LoginPageHeader } from './LoginPageHeader';
import { LoginPageInputs } from './LoginPageInputs';
import LoginPagrFooter from './LoginPagrFooter';
import { validateLoginForm } from '../../shared/utils/validators';

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState(""); 
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password}));
  }, [mail, password , setIsFormValid]);
  
  const handleLogin = () => {
    console.log(mail);
    console.log(password);
    console.log("Log in");
  };           

  return ( <AuthBox>
    <LoginPageHeader/>
    <LoginPageInputs
    mail={mail}
    setMail={setMail}
    password={password}
    setPassword={setPassword}
    />
    <LoginPagrFooter
    isFormValid={isFormValid}  handleLogin={handleLogin}/>
  </AuthBox>
  );
  
};

export default LoginPage;
