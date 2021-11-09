import './App.css';
import TextFormChange from './compnents/TextFormChange';
import Navber from './compnents/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './compnents/About';
import Alert from './compnents/Alert'
// import { Switch, Route, Redirect } from 'react-router-dom';
function App() {
const [alert, setAlert] = useState(null);
const [mode, setMode] = useState('light');
 const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#07337c';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
        <Navber mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextFormChange showAlert={showAlert}
             heading="Try TextUtils - word counter, character counter, remove extra spaces" 
             mode={mode} title="Text Formeter"/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}
export default App;
