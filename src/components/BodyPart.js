import React from 'react'
import {Stack, Typography} from "@mui/material";

import Icon from "../assets/icons/weight-lifting.png"
import { width } from '@mui/system';

const BodyPart = ({item, setBodyPart ,bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? "4px solid #008000" : '',
            backgroundColor:"#f7f9f7",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height:"280px",
            cursor:'pointer', gap:"47px"
    }}
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:1300, left:100, behavior: "smooth"})
    }}
    >
        <img src={Icon} alt="dumbbell"
         style={{width:"40px", height:"40px"}}/>
    <Typography fontSize="24px" fontWeight="bold" color="#008000"
    textTransform="capitalize"
    >{item}</Typography>
    </Stack>
  )
}

export default BodyPart