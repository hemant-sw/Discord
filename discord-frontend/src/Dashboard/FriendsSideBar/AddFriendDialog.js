import { Dialog, DialogTitle } from '@mui/material';
import React, { useEffect , useState} from 'react';
import {validateMail} from '../../shared/utils/validators';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import {InputWithLabel} from '../../shared/components/InputWithLabel'
import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';

export const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitations =() => {}
}) => {
    const [mail,setMail] = useState('');
    const [isFormValid, setIsFormValid]= useState('');

    const handleSendInviitation = () => {
        // send friend request tos server
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
        
    },[mail, setIsFormValid]);
   
  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
            <Typography>Invite a Friend</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>
                        Enter e-mail address of friend which you would like to invite
                    </Typography>
                </DialogContentText>
                <InputWithLabel
                    label='Mail'
                    type='text'
                    value={mail}
                    setValue={setMail}
                    placeholder='Enter mail address'
                    />
            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton
                onClick={handleSendInviitation}
                disable={!isFormValid}
                label='send'
                additionalStyles={{
                    marginLeft:'15px',
                    marginRight: '15px',
                    marginBottom: '10px',
                }}
                />
            </DialogActions>

    </Dialog>
  )
}
