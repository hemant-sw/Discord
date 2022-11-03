import React from 'react';
import {styled} from "@mui/system";
import { PendingInvitationListItem } from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
  {
    id:'1',
    senderId:{
      username: 'Mark',
      mail:'dummy@mark.com'
    }
  },
  {
    id:'2',
    senderId:{
      username: 'Sark',
      mail:'dummy@sark.com'
    }
  },
  {
    id:'3',
    senderId:{
      username: 'Bark',
      mail:'dummy@bark.com'
    }
  }
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

export const PendingInvitstionaList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map(invitation => (
        <PendingInvitationListItem
        key={invitation.id}
        id={invitation.id}
        username={invitation.senderId.username}
        mail={invitation.senderId.mail}
        />

      ))}

    </MainContainer>
  )
}