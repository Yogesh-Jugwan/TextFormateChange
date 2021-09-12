import './App.css';
import TextFormChange from './compnents/TextFormChange';
import Navber from './compnents/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './compnents/About';

// import { Switch, Route, Redirect } from 'react-router-dom';
function App() {
  //  const [mode, setmode] = useState({
  //   backgroundColor: 'white',
  //   border: '2px solid black'
  // })
  // const toggleMode = () => {
  //   if (mode.color === 'white') {
  //     setmode({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '2px solid black'
  //     })
  //   }
  //   else {
  //     setmode({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '2px solid white'
  //     })
  //   }
  // }

  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Router>
        <Navber mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextFormChange title="Text Formeter" mode={mode}  />
          </Route>
        </Switch>
      </Router>

    </>
  );
}
export default App;
