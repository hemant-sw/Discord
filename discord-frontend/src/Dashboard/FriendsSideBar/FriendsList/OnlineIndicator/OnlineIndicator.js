import React from 'react';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import { Box } from '@mui/system';

export const OnlineIndicator = () => {
  return (
    <Box
    sx={{
        color: "#3ba55d",
        display:"flex",
        alignItems:"center",
        position:"absolute",
        right:"5px",
    }}>
        <FiberManualRecordIcon/>

    </Box>
  );
};
