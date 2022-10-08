import React from 'react'
import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton'
import { RedirectInfo } from '../../shared/components/RedirectInfo'
import {useNavigate } from "react-router-dom";
import {Tooltip} from "@mui/material";

const getFormNotValidMessage= () => {
    return 'Username should contain between 3 to 12 characters and password contains between 6 to 12 character. Also correct E-mail id should provided';
     
};

const getFormValidMessage = () => {
    return "Press to Register !";
     
};


 const RegisterPageFooter = ({ handleRegister, isFormValid}) => {

    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate("/login");

    };

  return (
    <>
    <Tooltip 
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage() }>
    <div>
        <CustomPrimaryButton
    label= "Register"
    additionalStyles={{marginTop: '30px'}}
    disable={!isFormValid}
    onClick={handleRegister}     />
    
    </div>
    </Tooltip>
    <RedirectInfo
    text=""
    redirectText=" Already have an account ?"
    additionalStyles={{marginTop:'5px'}}
    redirectHandler={handlePushToLoginPage}
    />
    </> 
  )
}

export default RegisterPageFooter;



