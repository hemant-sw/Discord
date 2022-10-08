import React from 'react';
import Button from "@mui/material/Button";

export const CustomPrimaryButton = ({
    label,
    additionalStyles,
    disable,
    onClick,
}) => {
  return (
    <Button
    variant='contained'
    sx={{
        bgcolor:"#5865F2",
        color:"white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width:"100%",
        height:"40px",
    }}
    style={additionalStyles ? additionalStyles : {}}
    disabled={disable}
    onClick={onClick }    
    >

        {label}
    </Button>
  )
}
