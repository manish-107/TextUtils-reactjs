
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import Details from './components/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';





function App() {


  //alert message
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //toggle light and dark mode
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#091623';
      showAlert("Dark mode is enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#b7b6d6';
      showAlert("Light mode is enabled", "info")


    }
  }


  return (
    <>
      <Router>
        <Navbar title="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/Details' element={<Details title="world" mode={mode} toggleMode={toggleMode} />} />
          <Route exact path='/' element={<Home mode={mode} showAlert={showAlert} />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

Navbar.defaultProps = {
  title: ' title here'
}



export default App;
