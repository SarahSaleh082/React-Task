import logo from './logo.svg';
import './App.css';
import MainScreen from './components/MainScreen';
import AddScreen from './components/AddScreen';
import {Route, BrowserRouter as Router} from 
"react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/MainScreen" component={MainScreen}/>
        <Route path="/AddScreen" component={AddScreen}/>
        {/* <MainScreen /> */}
        {/* <AddScreen /> */}
      </div>
    </Router>
    
  );
}

export default App;
