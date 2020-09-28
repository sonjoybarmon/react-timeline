import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FakeData from '../src/components/FakeData/FakeData.jsx'
// import TimeLineItem from './components/TimeLineItem/TimeLineItem';
import TimeLine from './components/TimeLine/TimeLine';
 
export const timeLineContext = createContext();
function App() {
  const [timeLine , setTimeLine] = useState([]);
    useEffect(() =>{
      const fakeData = FakeData;
      setTimeLine(fakeData)
    },[])
  return (
      <timeLineContext.Provider value={[timeLine , setTimeLine]}>
        <div className="text-center">
            <h1 style={{padding:'50px 0'}}>My Blog TimeLine</h1>
            <TimeLine></TimeLine>
            <div className='text-center' style={{height:'50px', background:'#333333' , fontSize:'20px'}}>
                <p style={{color:'#ffffff' ,paddingTop:'10px'}}>&copy;sonjoybarmon 2020 || sonjoybarmon19@gmail.com</p>
            </div>
        </div>
      </timeLineContext.Provider>
  );
}

export default App;
