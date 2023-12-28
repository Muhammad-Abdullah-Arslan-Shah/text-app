
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import React ,{useState} from 'react'
import Alert from './Components/Alert';
// import about from './Components/About';

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from './Components/About';


// problem in dark-mode
function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

 const showAlert = (message,type)=>
 {
  
setAlert(
  {  msg:message,
     type:type
  }
)
setTimeout(()=>{
setAlert(null);}
,1000);
}

  const toogleMode=()=> {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is Enabled','Success')
      console.log(mode);
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Drak mode is Disabled','Success')
      console.log(mode);

    }
  }



  return (
    <>
     {/* if you want to en able routing cut this an only uncomment routing material */}
    <Navbar title ="Text App" mode = {mode}  toogleMode = {toogleMode}/>
    <Alert alert = {alert}/>
    <TextForm showAlert= {showAlert} mode = {mode}/>

     {/* Routing material commented */}
{/* <BrowserRouter>
    <Navbar title ="Text App" mode = {mode}  toogleMode = {toogleMode}/>
    <Alert alert = {alert}/>
    
	<Routes>
		<Route path='/About' element={ <About/>}/> 
	 <Route path="/" element={<TextForm showAlert= {showAlert} mode = {mode}/>}></Route>	
	</Routes>
</BrowserRouter>   */}
        
    </>
  );
}

export default App;
