import React,{useState, useEffect} from "react";
import { Typography } from "@mui/material";
import { AuthBox } from "../../shared/components/AuthBox";
import { RegisterPageInputs } from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import {connect } from "react-redux";
import {getAction} from "../../store/actions/authActions";
import { useNavigate } from 'react-router-dom';



const RegisterPage = ({register}) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [isFormValid, setIsFromValid] = useState(false);

  const handleRegister = () => {
  const userDetails = {
    mail,
    password,
    username
  };
  register(userDetails, navigate)
  };


 useEffect(() => {
  setIsFromValid(validateRegisterForm({
    mail,
    username,
    password,
  })
  );

 }, [mail, username,password,setIsFromValid]);


  return <AuthBox>
    <Typography  variant='5' sx={{color: 'white'}}>
      Create an account
    </Typography>
    <RegisterPageInputs
    mail={mail}
    setMail={setMail}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}/>

<RegisterPageFooter
handleRegister={handleRegister}
isFormValid={isFormValid}
/>
    
  </AuthBox>
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAction(dispatch),

  };
};

export default connect(null , mapActionsToProps) (RegisterPage);