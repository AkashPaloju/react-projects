import Nav from './components/nav';
import Main from './components/main';
// import Footer from './components/footer';

// import {useState} from 'react';
// import Boxes from './components/boxes';
// import SampleForm from './components/sampleform';
// import WindowTracker from './components/windowTracker';

import './App.css';


function App() {

  // const [show, setShow] = useState(true);
  // function toggleShow () {
  //   setShow(prevShow => !prevShow);
  // } 

  return (
    <div className="App">
      <Nav /> 
      <Main />
      {/* <Footer /> */}

      {/* <Boxes /> */}
      {/* <SampleForm /> */}
      {/* <button onClick={toggleShow}>Toggle Window Tracker</button>
      {show && <WindowTracker />} */}

    </div>
  );
}

export default App;
