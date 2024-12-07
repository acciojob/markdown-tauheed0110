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
      <textarea className="textarea" placeholder='type something here...' rows={41} value={value} onChange={(e)=>{handleChange(e)}}/>
      <div className='preview'>
        {
            loading ? <h1>Loading...</h1> : <h1>{value}</h1>
        }
      </div>
    </div>
  );
}

export default App;
