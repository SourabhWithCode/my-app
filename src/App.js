
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert"
import { Routes, Route, } from "react-router-dom";


function App() {
  const [darkText, setdarkText] = useState("Enable DarkMode");
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [text, settext] = useState("dark");

  const removeClass = ()=>{
    const navbar = document.getElementsByClassName("navbar");
    
    console.log(navbar)

    // navbar.classList.remove("bg-warning")

    // document.body.classList.remove("bg-dark");
    // document.body.classList.remove("bg-warning");
    // document.body.classList.remove("bg-info");
  }



  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setInterval(() => {
      setalert(null)
    }, 3000);

  }

  const toggleMode = () => {
    removeClass();
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = "#2e2d2d";
      document.body.style.color = "white";
      showAlert("Dark Mode Has Been Enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#2e2d2d";
      showAlert("Light Mode Has Been Enable", "success");
    };


    if (darkText === "Enable DarkMode") {
      setdarkText("Enable LightMode");
    } else {
      setdarkText("Enable DarkMode")
    }

    if (text === "dark") {
      settext("light")
    } else {
      settext("dark")
    }
  };

  // Info Mode 
  const [infoText, setinfoText] = useState("Enable LightBlue");



  const blueToggle = () => {
    removeClass();
    // Switch Mode
    if (mode === "light") {
      setmode("info");
      document.body.style.backgroundColor = "#00a8ff";
      document.body.style.color = "white"
    

    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#2e2d2d"

    }
    // Switch Mode
    // Text mode 

    if (text === "dark") {
      settext("light")
    } else {
      settext("dark")
    }


    // Text mode 

    if (infoText === 'Enable LightBlue') {
      setinfoText("Enable LightMode");
      showAlert("LightBlue Mode Has Been Enable", "success");



    } else {
      setinfoText('Enable LightBlue');
      showAlert("LightBlue Mode Has Been Disable", "success");

    }
  };




  // toggleWarning Function 

  const [Wtext, setWtext] = useState("warning")

  const toggleWarning = () => {
    removeClass();

    if (mode === "light") {
      setmode("warning");
      setWtext("light");
      settext("light");
      document.body.style.backgroundColor = "#fbc531";
      document.body.style.color = "white";
      showAlert("Yellow Mode Is Enable", "success");

    } else {
      setmode("light");
      setWtext("warning");
      settext("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#2e2d2d";
      showAlert("Yellow Mode Is Disable", "success");


    };
  };

  // const textChange = document.getElementById("textChange");



  return (
    <>

      <Navbar toggleWarning={toggleWarning} Wtext={Wtext} blueToggle={blueToggle} text={text} infoText={infoText} darkText={darkText} mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />


      <Routes>
        <Route exact path="/my-app" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter The Text To Analyze" />} />
        <Route exact path="/about" element={<About mode={mode} text={text} Wtext={Wtext}/>} />
      </Routes>

    

    </>
  );
}

export default App;
