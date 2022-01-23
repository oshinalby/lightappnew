
import { useState } from 'react';
import './App.css';
import Switch from './components/Switch';

function App() {
  const [value1,setvalue1]=useState('ON')
  const [value2,setvalue2]=useState('ON')
  return (
    <div className="App">
    
      <div className='lightContainer'>
      <Switch isOn={value1} toggle={()=>setvalue1(value1==='ON'?'OFF':'ON')}/>
      <Switch isOn={value2} toggle={()=>setvalue2(value2==='ON'?'OFF':'ON')}/>
      </div>
    </div>
  );
}

export default App;
