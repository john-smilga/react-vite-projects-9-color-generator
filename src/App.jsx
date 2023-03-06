import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';
import Form from './Form';
import ColorList from './ColorList';

function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  const addColor = (color) => {
    try {
      let newColors = new Values(color).all(10);
      console.log(newColors);
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
}

export default App;
