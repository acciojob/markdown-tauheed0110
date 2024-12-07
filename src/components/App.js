import React, { useEffect, useState } from 'react';
import '../styles/App.css'
const App = () => {
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("");


    function handleChange(e){
        setLoading(true);
        setValue(e.target.value)
    }
    useEffect(()=>{
        setLoading(false);
    }, [value])
    
  return (
    <div className='app'>
      <textarea placeholder='type something here...' rows={41} value={value} onChange={(e)=>{handleChange(e)}}/>
      <div className='preview'>
        {
            loading ? <p>Loading...</p> : <h1>{value}</h1>
        }
      </div>
    </div>
  );
}

export default App;
