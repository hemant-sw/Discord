import { Box, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';


export const InvitationDecisionButtons = ({disabled, 
    acceptInvitaionHandler,
    rejectInvitaionHandler}) => {
  return (
    <Box sx={{display:"flex"}}>
        <IconButton
        style={{color:'white'}}
        disabled={disabled}
        onClick={acceptInvitaionHandler}
        >
            <CheckIcon/>
        </IconButton>
        <IconButton
        style={{color:'white'}}
        disabled={disabled}
        onClick={rejectInvitaionHandler}
        >
            <ClearIcon/>
        </IconButton>
    </Box>
  )
}