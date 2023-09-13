import React from 'react';
import { div, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SimpleImageSlider from 'react-simple-image-slider';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import image from "../components/logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import immg from '../components/images.jpg';
import Uu from './size';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpeg';

const images = [
  { url: one },
  { url: two },
  { url: three },
  { url: four },
  { url: six },
  { url: five }
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

const flexContainerStyle = {
  display: 'flex',
 
  justifyContent: 'center',
  flexWrap: 'wrap', // Allow content to wrap to the next line
};

const responsiveColumn = {
  flexBasis: '100%', // Make each item take full width in a column
  padding: '5px', // Adjust spacing as needed
};

export default function App() {
  return (
    <div id= "canvas_container">
    <div className='m-3'id= "canvas_box">
      <img src={image} className="my-1" height={70} alt="404" />
      <div style={flexContainerStyle}>
        <div className="note mt-5">
          <SimpleImageSlider
            width={650}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <div className="text-light">
          <Typography variant="h5" className="mb-3" align="center">
            Enter Your Information
          </Typography>
          <Form style={{ width: '100%' }} className='m-3'> 
            <div style={responsiveColumn}>
              <InputDefault label="Name" fullWidth />
            </div>
            <div style={responsiveColumn}>
              <InputDefault label="Admission Number" fullWidth />
            </div>
            <div style={responsiveColumn}>
              <InputDefault label="Email" fullWidth />
            </div>
            <div style={responsiveColumn}>
              <InputDefault label="Phone Number" fullWidth />
            </div>
            <div style={responsiveColumn}>
              <InputDefault label="Branch" fullWidth />
            </div>
            <div style={responsiveColumn} className='hostel'  fullWidth>
              <InputDefault label="Hostel" className='w-50'/>
          
              <InputDefault label="Room No" className='w-49' />
            </div>
            <div style={responsiveColumn}>
              <InputDefault label="Transaction id" fullWidth />
            </div>
            {/* <span>Size</span> */}
            {/* <br/> */}
              <Uu />
            <div style={responsiveColumn}>
            
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file" />
                <Button className='m-3' variant="outlined" component="span">
                  Upload button
                </Button>
              </label>
              <Button type='submit' className='m-3' variant="contained">Place order</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
}