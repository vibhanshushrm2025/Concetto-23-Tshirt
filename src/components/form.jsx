import React from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

import SimpleImageSlider from 'react-simple-image-slider';
import immg from '../components/images.jpg';
import Uu from './size';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

const images = [
  { url: immg },
  { url: immg },
  { url: immg },
  { url: immg },
];

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));
const InputDefault = styled(TextField)({
  '& label.Mui-focused': {
    color: '#2F3C7E',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8AAAE5', // Change this color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#317773', // Change this color
    },
    '&:hover fieldset': {
      borderColor: '#E2D1F9', // Change this color
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ADD8E6', // Change this color
    },
  },
    '& input': {
      color: '#FFFFFF', // Change the text color
    },
    '& .MuiFormLabel-root': {
      color: '#FFFFFF', // Change the label text color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#FFFFFF', // Change the focused label text color
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#FFFFFF', // Change the placeholder color
    },
  
});

export default function App() {
  return (
    <Container>   <div className='row'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="note">
            <SimpleImageSlider
              width={450}
              height={600}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className='   text-light'>
          <Typography variant="h5" className="mb-3" align="center">
            Enter Your Information
          </Typography>
          <form>
            <div className='m-3'><InputDefault label="Name"  fullWidth /></div>  
            <div className='m-3'><InputDefault label="Admission Number" fullWidth /></div>  
            <div className='m-3'><InputDefault label="Email" fullWidth /></div>  
            <div className='m-3'><InputDefault label="Phone Number" fullWidth /></div>  
            <div className='m-3'><InputDefault label="Branch" fullWidth /></div>  
            <span><Uu /></span>
            <MDBBtn className="w-100 mt-3 mx-3" type="submit" color="primary">
              Place order
            </MDBBtn>
          </form>
        </Grid>
      </Grid>
    </div>
    </Container>
 
  );
}
