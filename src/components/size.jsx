import * as React from 'react';
import { useState } from 'react';

const options = ['S', 'M', 'L','XL'];

export default function App() {
  const [selected, setSelected] = useState(null);

  function onChange(i) {
    setSelected((prev) => (i === prev ? null : i));
  }

  return (
    <div>
      {options.map((o, i) => (
        <label key={i}>
          {o}
          <input
            type="checkbox"
            checked={i === selected}
            onChange={() => onChange(i)}
          />
        </label>
      ))}
      <br />

    </div>
  );
}
