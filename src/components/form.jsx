import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import Uu from "./size";

export default function App() {
  return (
    
    <form  >
      <MDBInput placeholder='NAME' />
      <MDBInput placeholder='ADMISSION NUMBER' />
      <MDBInput placeholder='EMAIL ' type='email'  />
      <MDBInput type='tel' placeholder='Phone Number' />
      <MDBInput  placeholder='Branch' />
       <span>Size <Uu/> </span> 
      <MDBBtn  type='submit' block>
        Place order
      </MDBBtn>
    </form>
    // </div>
  );
}