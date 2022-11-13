import './App.css';
import {
   Routes, Route,
} from 'react-router-dom';
import Home from './Home';
import Details_data from './Details';
function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/detail/:id' element={<Details_data/>}/>
    </Routes>
    </>
  );
}

export default App;
