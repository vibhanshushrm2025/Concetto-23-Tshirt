import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { FormControlLabel } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
 
const options = ['S', 'M', 'L','XL'];

export default function App() {
  const [selected, setSelected] = useState(null);

  function onChange(i) {
    setSelected((prev) => (i === prev ? null : i));
  }
 
  return (
    <div>
       <FormControl className='mx-4 text-light'>
        <FormLabel className='text-light'  >Size</FormLabel>
        <RadioGroup row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="M"
          name="radio-buttons-group"
        >
      {options.map((o, i) => (
       
          <FormControlLabel  className='text-light' key={i} value={o} control={<Radio className='text-light' />} checked={i === selected}
          onChange={() => onChange(i)}  label={o} />
          
       
       
      ))}
      <br />
      </RadioGroup>
      </FormControl>
    </div>
  );
}
